export const errorMessages = {
  invalidInstance: (className: string) => `Invalid ${className}`,
  instanceDoesNotExist: (className: string) =>
    `This ${className} does not exist`,
  notificationFailed: (error: any) => `Notification error: ${error}`,
  adminnotificationFailed: (error: any) => `Admin notification error: ${error}`,
  insufficientStockForOrder: "Cannot process order: Not Enough Stock",
  alreadyExists: (className: string) => `${className} already exists`,
};
