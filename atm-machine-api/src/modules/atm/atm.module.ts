import { Module } from '@nestjs/common';
import { AtmService } from './atm.service';
import { AtmValidator } from './atm.validator';
import { AtmController } from './atm.controller';
import { JsonIoService } from '../json-io/json-io.service';
import { AccountRepository } from './repositories/account.repository';
import { TransactionRepository } from './repositories/transaction.repository';

@Module({
  imports: [JsonIoService],
  providers: [
    AtmService,
    AtmValidator,
    AccountRepository,
    TransactionRepository,
  ],
  controllers: [AtmController],
})
export class AtmModule {}
