import { Module } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { CoordinatesController } from './coordinates.controller';
import { GeocodingModule } from '../geocoding/geocoding.module';

@Module({
  imports: [GeocodingModule],
  providers: [CoordinatesService],
  controllers: [CoordinatesController],
})
export class CoordinatesModule {}
