import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENV_KEYS } from '../../common/constants/env-variables';
import { queryParams } from '../../common/constants/geocoding-api';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import { SearchLocationResponse } from '../../../src/common/interfaces/geocoding';
import { errorMessages } from '../../../src/common/constants/error-messages';

@Injectable()
export class GeocodingService {
  private apiUrl: string;

  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {
    const apiKey = this.configService.get<string>(ENV_KEYS.GEOCODING_API_KEY) ?? '';
    const apiURL = this.configService.get<string>(ENV_KEYS.GEOCODING_API_URL) ?? '';

    this.apiUrl = `${apiURL}?${queryParams.api_key}=${apiKey}`;
  }

  async getCoordinates(location: string) {
    const url = `${this.apiUrl}&${queryParams.q}=${encodeURIComponent(location)}`;
    try {
      const response: AxiosResponse = await firstValueFrom(this.httpService.get(url));
      const data: SearchLocationResponse = response.data as SearchLocationResponse;
      const result = data.length
        ? {
            display_name: data[0].display_name,
            latitude: data[0].lat,
            longitude: data[0].lon,
          }
        : {};
      return result;      
    } 
    catch (error) {
      console.log(error);
      throw new InternalServerErrorException(errorMessages.anErrorOccuredWhileFetchingCoordinates);
    }
  }
}
