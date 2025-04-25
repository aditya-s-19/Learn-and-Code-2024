import { InternalServerErrorException } from '@nestjs/common';

export class JsonIOException extends InternalServerErrorException {
  constructor() {
    super('An I/O error occurred while accessing the JSON file.');
  }
}
