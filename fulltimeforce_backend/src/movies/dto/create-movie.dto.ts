import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateMoviesDto {
  @IsNotEmpty()
  @IsString()
  id: number;

  @IsString()
  @MinLength(2, { message: 'Title must have atleast 2 characters.' })
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsString()
  poster_path: string;

  @IsNotEmpty()
  @IsString()
  overview: string;

  @IsNotEmpty()
  @IsString()
  release_date: string;
}
