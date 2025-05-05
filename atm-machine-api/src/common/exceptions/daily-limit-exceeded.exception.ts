import { ForbiddenException } from '@nestjs/common';
import { errorMessages } from '../constants/errorMessages';

export class DailyLimitExceededException extends ForbiddenException {
  constructor() {
    super(errorMessages.dailyLimitExceededException);
  }
}
