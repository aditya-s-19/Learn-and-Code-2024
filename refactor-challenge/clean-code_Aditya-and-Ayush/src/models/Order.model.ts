import { Order } from "../classes/Order";
import { errorMessages } from "../common/constants/errors";

export class OrderModel {
  private static orders: Map<string, Order> = new Map();

  public static create(order: Order): void {
    if (!(order instanceof Order)) {
      throw new Error(errorMessages.invalidInstance("Order"));
    }

    if (this.orders.has(order.id)) {
      throw new Error(errorMessages.alreadyExists("Order"));
    }

    this.orders.set(order.id, order);
  }

  public static get(orderId: string): Order {
    if (typeof orderId === "string" && this.orders.has(orderId)) {
      return this.orders.get(orderId) as Order;
    } else {
      throw new Error(errorMessages.instanceDoesNotExist("Order"));
    }
  }

  public static update(order: Order): void {
    if (!(order instanceof Order)) {
      throw new Error(errorMessages.invalidInstance("Order"));
    }

    if (!this.orders.has(order.id)) {
      throw new Error(errorMessages.instanceDoesNotExist("Order"));
    }

    this.orders.set(order.id, order);
  }

  public static delete(orderId: string): void {
    if (typeof orderId === "string" && this.orders.has(orderId)) {
      this.orders.delete(orderId);
    } else {
      throw new Error(errorMessages.instanceDoesNotExist("Order"));
    }
  }

  public static getAll(): Order[] {
    return Array.from(this.orders.values());
  }
}
