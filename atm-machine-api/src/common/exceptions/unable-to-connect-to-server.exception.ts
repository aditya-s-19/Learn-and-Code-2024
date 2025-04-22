import { ServiceUnavailableException } from '@nestjs/common';
import { errorMessages } from '../constants/errorMessages';

export class UnableToConnectToServerException extends ServiceUnavailableException {
  constructor() {
    super(errorMessages.unableToConnectToServerException);
  }
}
