import { IsInt, Min, Max, IsNumber, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class WithdrawDto {
  @IsInt()
  @Min(1)
  accountNumber: number;

  @IsInt()
  @Min(1000)
  @Max(9999)
  PIN: number;

  @IsNumber()
  @IsPositive()
  amount: number;
}
