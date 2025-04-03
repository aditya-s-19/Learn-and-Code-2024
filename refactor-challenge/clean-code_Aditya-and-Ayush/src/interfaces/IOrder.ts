import { OrderStatusEnum } from "../common/enums/order-status.enum";
import { IOrderItem } from "./IOrderItem";

export interface IOrder {
  id: string;
  customerId: string;
  items: IOrderItem[];
  status: OrderStatusEnum;
  createdAt: Date;
  updatedAt: Date;
  totalAmount: number;
  discountApplied: number;
  finalAmount: number;
}
