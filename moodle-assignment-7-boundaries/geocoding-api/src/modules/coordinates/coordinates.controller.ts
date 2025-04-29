import { Controller, Get, Query } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private coordinatesService: CoordinatesService) {}

  @Get('get')
  getCoordinates(@Query('location') location: string) {
    return this.coordinatesService.getCoordinates(location);
  }
}
