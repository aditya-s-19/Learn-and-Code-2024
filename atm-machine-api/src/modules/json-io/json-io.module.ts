import { Module } from '@nestjs/common';
import { JsonIoService } from './json-io.service';

@Module({
  providers: [JsonIoService],
  exports: [JsonIoService],
})
export class JsonIoModule {}
