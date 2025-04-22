import { ForbiddenException } from '@nestjs/common';
import { errorMessages } from '../constants/errorMessages';

export class AccountBlockedException extends ForbiddenException {
  constructor() {
    super(errorMessages.accountBlockedException);
  }
}
