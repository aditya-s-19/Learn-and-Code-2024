import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENV_KEYS } from 'src/common/constants/env-variables';
import { errorMessages } from 'src/common/constants/error-messages';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  public getGeocodeApiKey(): number {
    return Number(this.getValue(ENV_KEYS.GEOCODING_API_KEY));
  }

  public getGeocodeApiUrl(): string {
    return this.getValue(ENV_KEYS.GEOCODING_API_URL);
  }

  private getValue(key: string): string {
    try {
      return this.configService.getOrThrow(key);
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(
        errorMessages.anErrorOccurredWhileProcessingRequest,
      );
    }
  }
}
