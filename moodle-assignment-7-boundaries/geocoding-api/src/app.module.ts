import { Module } from '@nestjs/common';
import { CoordinatesModule } from './modules/coordinates/coordinates.module';
import { GeocodingModule } from './modules/geocoding/geocoding.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CoordinatesModule,
    GeocodingModule,
  ],
})
export class AppModule {}
