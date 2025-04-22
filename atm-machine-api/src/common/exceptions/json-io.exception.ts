import { InternalServerErrorException } from '@nestjs/common';
import { errorMessages } from '../constants/errorMessages';

export class JsonIOException extends InternalServerErrorException {
  constructor() {
    super(errorMessages.jsonIoException);
  }
}
