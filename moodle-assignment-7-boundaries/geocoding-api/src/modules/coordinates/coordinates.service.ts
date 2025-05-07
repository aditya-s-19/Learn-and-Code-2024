import { Injectable } from '@nestjs/common';
import { GeocodingService } from '../geocoding/geocoding.service';

@Injectable()
export class CoordinatesService {
  constructor(private geocodingService: GeocodingService) {}

  async getCoordinates(location: string) {
    const coordinates = await this.geocodingService.getCoordinates(location);
    return coordinates;
  }
}
