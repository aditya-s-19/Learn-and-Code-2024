import { Customer } from "./classes/Customer";
import { Product } from "./classes/Product";
import { Order } from "./classes/Order";
import { OrderProcessor } from "./classes/OrderProcessor";
import { Report } from "./classes/Report";
import { Logger } from "./common/utils/Logger";
import { MembershipLevelEnum } from "./common/enums/membership-level.enum";
import { CategoryEnum } from "./common/enums/category.enum";
import { OrderStatusEnum } from "./common/enums/order-status.enum";
import { CustomerModel } from "./models/Customer.model";
import { ProductModel } from "./models/Product.model";
import { OrderModel } from "./models/Order.model";
import { IOrderItem } from "./interfaces/IOrderItem";
import { loggerMessages } from "./common/constants/logger";

async function main() {
  Logger.info(loggerMessages.onStart);

  const customer = new Customer(
    "CUST1",
    "John Doe",
    "john@example.com",
    "123 Main St",
    "555-0123",
    MembershipLevelEnum.Gold
  );
  try {
    CustomerModel.set(customer);
    Logger.info(loggerMessages.onCustomerCreated(customer.id, customer.name));
  } catch (err) {
    Logger.error(err);
  }

  const product = new Product("PROD1", "Widget Pro", 99.99, "A fantastic widget", CategoryEnum.Electronics, 100, true);
  try {
    ProductModel.set(product);
    Logger.info(loggerMessages.onProductCreated(product.name));
  } catch (err) {
    Logger.error(err);
  }

  const orderItems: IOrderItem[] = [{ productId: product.id, quantity: 2 }];
  const totalAmount = product.price * 2;

  const order = new Order(
    "ORD123",
    customer.id,
    orderItems,
    OrderStatusEnum.Pending,
    new Date(),
    new Date(),
    totalAmount
  );
  try {
    OrderModel.set(order);
    Logger.info(loggerMessages.onOrderCreated(order.id, order.totalAmount));
  } catch (err) {
    Logger.error(err);
  }

  try {
    await OrderProcessor.processOrder(order.id);
    Logger.info(loggerMessages.onOrderProcessSucceeded);
  } catch (err) {
    Logger.info(`${loggerMessages.onOrderProcessFailed}: ${err}`);
  }
}

main().catch((error) => {
  Logger.error("Application error:", error);
  return;
});
