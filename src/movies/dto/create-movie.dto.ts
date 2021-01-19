import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly yaer: number;
  @IsString({ each: true })
  readonly gender: string[];
}
