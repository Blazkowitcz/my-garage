import { IsString } from 'class-validator';

export class BikesAddDto {
  @IsString()
  name: string;

  @IsString()
  brand: string;
}
