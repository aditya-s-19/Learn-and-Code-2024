import { Controller, Get, Query } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { GetCoordinatesQueryDto } from './dtos/get-coordinates.dto';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private coordinatesService: CoordinatesService) {}

  @Get('get')
  getCoordinates(@Query() query: GetCoordinatesQueryDto) {
    return this.coordinatesService.getCoordinates(query.location);
  }
}
