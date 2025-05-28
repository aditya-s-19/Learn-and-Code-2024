import { OrderStatusEnum } from "../common/enums/order-status.enum";
import { IOrderItem } from "../interfaces/IOrderItem";

export class Order {
  id: string;
  customerId: string;
  items: IOrderItem[];
  status: OrderStatusEnum;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number;
  discountApplied: number;
  finalAmount: number;

  constructor(
    id: string,
    customerId: string,
    items: IOrderItem[],
    status: OrderStatusEnum,
    createdAt: Date,
    updatedAt: Date,
    totalAmount: number,
    discountApplied: number = 0,
    finalAmount: number = 0
  ) {
    this.id = id;
    this.customerId = customerId;
    this.items = items;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.totalAmount = totalAmount;
    this.discountApplied = discountApplied;
    this.finalAmount = finalAmount;
  }
}
