import { BadRequestException } from '@nestjs/common';
import { errorMessages } from '../constants/errorMessages';

export class InsufficientCashException extends BadRequestException {
  constructor() {
    super(errorMessages.insufficientCashException);
  }
}
