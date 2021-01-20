import { IsNumber, IsOptional, IsString } from 'class-validator';

//DTO(DATA TRANSFER OBJECT)
//코드를 더 간결하게해주며, 쿼리에대해 유효성검사를 가능하게해줌

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genre: string[];
}
