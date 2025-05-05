import { Body, Controller, Post } from '@nestjs/common';
import { WithdrawDto } from './dtos/withdraw.dto';
import { AtmService } from './atm.service';

@Controller('atm')
export class AtmController {
  constructor(private readonly atmService: AtmService) {}

  @Post('withdraw')
  withdraw(@Body() withdrawDto: WithdrawDto) {
    this.atmService.withdraw(withdrawDto);
  }
}
