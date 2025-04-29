import { IsString, IsNotEmpty } from 'class-validator';

export class GetCoordinatesQueryDto {
  @IsString()
  @IsNotEmpty()
  location: string;
}