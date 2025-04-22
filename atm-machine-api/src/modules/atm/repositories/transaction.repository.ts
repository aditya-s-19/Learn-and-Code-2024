import { Injectable } from '@nestjs/common';
import { transactionsFileName } from 'src/common/constants/jsonFileDirectory';
import { Transaction } from 'src/interfaces/transaction.type';
import { JsonIoService } from 'src/modules/json-io/json-io.service';

@Injectable()
export class TransactionRepository {
  constructor(private readonly jsonIoService: JsonIoService) {}

  readTransactions(): Transaction[] {
    return this.jsonIoService.readFile(transactionsFileName);
  }

  writeTransactions(transactions: Transaction[]): void {
    this.jsonIoService.writeFile(transactionsFileName, transactions);
  }
}
