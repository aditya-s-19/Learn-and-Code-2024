import { OrderStatusEnum } from "../common/enums/order-status.enum";
import { Logger } from "../common/utils/Logger";
import { loggerMessages } from "../common/utils/loggerMessages";
import { CustomerModel } from "../models/Customer.model";
import { OrderModel } from "../models/Order.model";
import { Order } from "./Order";

export abstract class Report {
  // Public methods

  public static async generateOrderReport(startDate: Date, endDate: Date): Promise<string> {
    Logger.info(loggerMessages.generatingOrderReport(startDate, endDate));

    let report = "Order Report\n";
    let totalOrders = 0;
    let totalRevenue = 0;

    OrderModel.getAll().forEach((order) => {
      if (Report.isOrderInDateRange(order, startDate, endDate) && order.status !== OrderStatusEnum.Cancelled) {
        totalOrders++;
        totalRevenue += order.finalAmount;

        const customer = CustomerModel.get(order.customerId);
        if (customer) {
          report += Report.formatOrderDetails(order, customer.name);
        } else {
          Logger.warn(loggerMessages.customerNotFoundForOrderId(order.id));
        }
      }
    });

    report += Report.formatReportSummary(totalOrders, totalRevenue);

    Logger.info(loggerMessages.reportGeneratedWithTotalOrdersAndTotalRevenue(totalOrders, totalRevenue));
    return report;
  }

  // private methods

  private static isOrderInDateRange(order: Order, startDate: Date, endDate: Date): boolean {
    return order.createdAt >= startDate && order.createdAt <= endDate;
  }

  private static formatOrderDetails(order: Order, customerName: string): string {
    let details = "";
    details += `\nOrder ID: ${order.id}`;
    details += `\nCustomer: ${customerName}`;
    details += `\nAmount: $${order.finalAmount.toFixed(2)}`;
    details += `\nStatus: ${order.status}`;
    details += `\n-------------------`;
    return details;
  }

  private static formatReportSummary(totalOrders: number, totalRevenue: number): string {
    return `\n\nTotal Orders: ${totalOrders}\nTotal Revenue: $${totalRevenue.toFixed(2)}`;
  }
}
