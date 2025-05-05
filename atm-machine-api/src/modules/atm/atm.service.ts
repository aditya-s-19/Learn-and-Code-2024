import { Injectable } from '@nestjs/common';
import { AtmValidator } from './atm.validator';
import { TransactionRepository } from './repositories/transaction.repository';
import { WithdrawDto } from './dtos/withdraw.dto';
import { AccountRepository } from './repositories/account.repository';
import { Transaction } from 'src/interfaces/transaction.type';

@Injectable()
export class AtmService {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly transactionRepository: TransactionRepository,
    private readonly atmValidator: AtmValidator,
  ) {}

  withdraw(withdrawDto: WithdrawDto): void {
    const { accountNumber, PIN, amount } = withdrawDto;
    const accounts = this.accountRepository.readAccounts();
    const account = accounts.find((acc) => acc.accountNumber === accountNumber);

    this.atmValidator.validateAccountExists(account);
    this.atmValidator.validateAccountNotBlocked(account!);

    try {
      this.atmValidator.validatePIN(account!, PIN);
    } catch (error) {
      this.accountRepository.writeAccounts(
        accounts.filter((acc) =>
          acc.accountNumber === account?.accountNumber ? account : acc,
        ),
      );
      throw error;
    }

    this.atmValidator.validateSufficientBalance(account!, amount);

    account!.currentBalance -= amount;

    this.accountRepository.writeAccounts(
      accounts.filter((acc) =>
        acc.accountNumber === account?.accountNumber
          ? account
          : AccountRepository,
      ),
    );

    const transaction: Transaction = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      accountNumber: account!.accountNumber,
      type: 'withdrawal',
      amount,
      date: new Date().toISOString(),
    };

    const transactions = this.transactionRepository.readTransactions();
    transactions.push(transaction);
    this.transactionRepository.writeTransactions(transactions);
  }
}
