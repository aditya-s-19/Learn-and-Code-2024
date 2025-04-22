import { Module } from '@nestjs/common';
import { AtmModule } from './modules/atm/atm.module';
import { JsonIoModule } from './modules/json-io/json-io.module';
@Module({
  imports: [JsonIoModule, AtmModule],
})
export class AppModule {}
