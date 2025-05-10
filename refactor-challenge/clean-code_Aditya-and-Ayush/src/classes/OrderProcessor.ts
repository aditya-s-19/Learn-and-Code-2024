import { OrderStatusEnum } from "../common/enums/order-status.enum";
import { MembershipLevelEnum } from "../common/enums/membership-level.enum";
import { Logger } from "../common/utils/Logger";
import { IOrderItem } from "../interfaces/IOrderItem";
import { Customer } from "./Customer";
import { Notification } from "./Notification";
import { CustomerModel } from "../models/Customer.model";
import { OrderModel } from "../models/Order.model";
import { ProductModel } from "../models/Product.model";
import { Order } from "./Order";
import { loggerMessages } from "../common/utils/loggerMessages";
import { errorMessages } from "../common/constants/errors";

export abstract class OrderProcessor {
  private static processingQueue: string[];

  constructor() {
    OrderProcessor.processingQueue = [];
  }

  // Public methods

  public static async processOrder(orderId: string): Promise<void> {
    Logger.info(loggerMessages.processingOrder(orderId));

    const order = OrderModel.get(orderId);
    const customer = CustomerModel.get(order.customerId);

    if (!OrderProcessor.validateProductStock(order.items)) {
      throw new Error(errorMessages.insufficientStockForOrder);
    }

    OrderProcessor.updateProductStock(order.items);
    const discount = OrderProcessor.calculateDiscount(customer, order.totalAmount);
    OrderProcessor.updateOrderAfterProcessing(order, discount);
    OrderModel.update(order);
    OrderProcessor.processingQueue.push(order.id);

    await Notification.sendCustomerNotification(customer.email, `Order ${orderId} is being processed`);
    await Notification.sendAdminNotification(`New order processing: ${orderId}`);
    Logger.info(loggerMessages.orderProcessedSuccessfully(orderId));
  }

  public static async cancelOrder(orderId: string): Promise<void> {
    Logger.info(loggerMessages.cancellingOrder(orderId));

    const order = OrderModel.get(orderId);
    const customer = CustomerModel.get(order.customerId);

    OrderProcessor.updateProductStock(order.items, true);
    OrderProcessor.updateOrderAfterCancellation(order);

    OrderModel.delete(order.id);
    OrderProcessor.removeOrderFromQueue(order.id);

    await Notification.sendCustomerNotification(customer.email, `Order ${orderId} has been cancelled`);
    await Notification.sendAdminNotification(`Order cancelled: ${orderId}`);
    Logger.info(loggerMessages.orderCancelledSuccessfully(orderId));
  }

  // Private methods

  private static validateProductStock(items: IOrderItem[]): boolean {
    for (const item of items) {
      const product = ProductModel.get(item.productId);
      if (product.stock < item.quantity) {
        Logger.error(loggerMessages.insufficientStockForProductId(item.productId), {
          requested: item.quantity,
          available: product.stock,
        });
        return false;
      }
    }
    return true;
  }

  private static updateProductStock(items: IOrderItem[], isCancel: boolean = false): void {
    for (const item of items) {
      const product = ProductModel.get(item.productId);
      if (product) {
        product.stock += isCancel ? item.quantity : -item.quantity;
        ProductModel.update(product);
        Logger.debug(loggerMessages.updatedProductStock(product.id, product.stock));
      }
    }
  }

  private static calculateDiscount(customer: Customer, totalAmount: number): number {
    let discount = 0;

    switch (customer.membershipLevel) {
      case MembershipLevelEnum.Gold:
        discount = 0.1;
        break;
      case MembershipLevelEnum.Platinum:
        discount = 0.15;
        break;
      case MembershipLevelEnum.Diamond:
        discount = 0.2;
        break;
      default:
        discount = 0;
    }

    if (totalAmount > 1000) {
      discount += 0.05;
    }

    Logger.debug(loggerMessages.appliedDiscount(discount, customer.id));
    return discount;
  }

  private static updateOrderAfterProcessing(order: Order, discount: number): void {
    order.status = OrderStatusEnum.Processing;
    order.discountApplied = order.totalAmount * discount;
    order.finalAmount = order.totalAmount - order.discountApplied;
    order.updatedAt = new Date();

    Logger.debug(loggerMessages.orderUpdatedWithDiscount(discount));
  }

  private static updateOrderAfterCancellation(order: Order): void {
    order.status = OrderStatusEnum.Cancelled;
    order.updatedAt = new Date();

    Logger.debug(loggerMessages.orderStatusUpdatedToCancelled(order.id));
  }

  private static removeOrderFromQueue(orderId: string) {
    OrderProcessor.processingQueue = OrderProcessor.processingQueue.filter((id) => id !== orderId);
  }
}
