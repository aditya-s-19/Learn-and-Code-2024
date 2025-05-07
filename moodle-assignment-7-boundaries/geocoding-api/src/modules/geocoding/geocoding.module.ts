import { Module } from '@nestjs/common';
import { GeocodingService } from './geocoding.service';
import { HttpModule } from '@nestjs/axios';
import { AppConfigModule } from '../config/app-config.module';

@Module({
  imports: [HttpModule, AppConfigModule],
  providers: [GeocodingService],
  exports: [GeocodingService],
})
export class GeocodingModule {}
