export const loggerMessages = {
  onStart: "Starting application...",
  onCustomerCreated: (id: string, customerName: string) => `Customer created: ${id} - ${customerName}`,
  onProductCreated: (productName: string) => `Products created: ${productName}`,
  onOrderCreated: (id: string, totalAmount: number) =>
    `Order created: ${id} with total amount $${totalAmount.toFixed(2)}`,
  processingOrder: (orderId: string) => `Processing order: ${orderId}`,
  orderProcessedSuccessfully: (orderId: string) => `Order ${orderId} processed successfully`,
  cancellingOrder: (orderId: string) => `Cancelling order: ${orderId}`,
  orderCancelledSuccessfully: (orderId: string) => `Order ${orderId} cancelled successfully`,
  insufficientStockForProductId: (productId: string) => `Insufficient stock for product ${productId}`,
  updatedProductStock: (id: string, stock: number) => `Updated product ${id} stock to ${stock}`,
  appliedDiscount: (discount: number, customerId: string) =>
    `Applied discount of ${discount * 100}% for customer ${customerId}`,
  orderUpdatedWithDiscount: (discount: number) => `Order updated with discount of ${discount * 100}%`,
  orderStatusUpdatedToCancelled: (orderId: string) => `Order ${orderId} status updated to cancelled`,
  onOrderProcessSucceeded: "Order processing succeeded",
  onOrderProcessFailed: "Order processing failed",
  sendingNotification: (email: string, message: string) => `Sending email to ${email}: ${message}`,
  sendingNotificationFailed: "Failed to send customer notification",
  sendingAdminNotification: (message: string) => `Admin notification: ${message}`,
  sendingAdminNotificationFailed: "Failed to send admin notification",
  generatingOrderReport: (startDate: Date, endDate: Date) =>
    `Generating order report from ${startDate.toISOString()} to ${endDate.toISOString()}`,
  customerNotFoundForOrderId: (id: string) => `Customer not found for order: ${id}`,
  reportGeneratedWithTotalOrdersAndTotalRevenue: (totalOrders: number, totalRevenue: number) =>
    `Report generated with ${totalOrders} orders totaling ${totalRevenue.toFixed(2)}`,
};
