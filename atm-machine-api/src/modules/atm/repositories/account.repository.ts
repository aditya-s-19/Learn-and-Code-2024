import { Injectable } from '@nestjs/common';
import { accountsFileName } from 'src/common/constants/jsonFileDirectory';
import { Account } from 'src/interfaces/account.type';
import { JsonIoService } from 'src/modules/json-io/json-io.service';

@Injectable()
export class AccountRepository {
  constructor(private readonly jsonIoService: JsonIoService) {}

  readAccounts(): Account[] {
    return this.jsonIoService.readFile(accountsFileName);
  }

  writeAccounts(accounts: Account[]): void {
    this.jsonIoService.writeFile(accountsFileName, accounts);
  }
}
