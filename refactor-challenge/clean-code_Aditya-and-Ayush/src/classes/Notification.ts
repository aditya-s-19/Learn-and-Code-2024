import { errorMessages } from "../common/constants/errors";
import { loggerMessages } from "../common/utils/loggerMessages";
import { Logger } from "../common/utils/Logger";

export abstract class Notification {
  public static async sendCustomerNotification(email: string, message: string): Promise<void> {
    try {
      Logger.info(loggerMessages.sendingNotification(email, message));
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      Logger.error(loggerMessages.sendingNotificationFailed(), error);
      throw new Error(errorMessages.notificationFailed(error));
    }
  }

  public static async sendAdminNotification(message: string): Promise<void> {
    try {
      Logger.info(loggerMessages.sendingAdminNotification(message));
      await new Promise((resolve) => setTimeout(resolve, 50));
    } catch (error) {
      Logger.error(loggerMessages.sendingAdminNotificationFailed(), error);
      throw new Error(errorMessages.adminnotificationFailed(error));
    }
  }
}
