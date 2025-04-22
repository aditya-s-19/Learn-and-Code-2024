import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Account } from 'src/interfaces/account.type';
import { AccountBlockedException } from 'src/common/exceptions/account-blocked.exception';
import { errorMessages } from 'src/common/constants/errorMessages';
import { InsufficientCashException } from 'src/common/exceptions/insufficient-cash.exception';

@Injectable()
export class AtmValidator {
  validateAccountExists(account: Account | undefined): void {
    if (!account) {
      throw new NotFoundException(errorMessages.accountDoesNotExist);
    }
  }

  validateAccountNotBlocked(account: Account): void {
    if (account.blocked) {
      throw new AccountBlockedException();
    }
  }

  validatePIN(account: Account, inputPIN: number): void {
    if (account.PIN !== inputPIN) {
      account.continuousInvalidPINAttempts =
        (account.continuousInvalidPINAttempts || 0) + 1;

      if (account.continuousInvalidPINAttempts >= 3) {
        account.blocked = true;
      }

      throw new ForbiddenException(errorMessages.givenPINIsInvalid);
    }

    account.continuousInvalidPINAttempts = 0;
  }

  validateSufficientBalance(account: Account, amount: number): void {
    if (account.currentBalance < amount) {
      throw new InsufficientCashException();
    }
  }
}
