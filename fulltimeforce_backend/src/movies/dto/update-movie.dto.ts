import { PartialType } from '@nestjs/mapped-types';
import { CreateMoviesDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMoviesDto) {}
