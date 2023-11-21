import { Injectable } from '@nestjs/common';
import { CreateMoviesDto } from './dto/create-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { movie_information } from './entities/movie_information.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(movie_information)
    private moviesRepository: Repository<movie_information>,
  ) {}
  async createMovie(
    createMoviesDto: CreateMoviesDto,
  ): Promise<movie_information> {
    const movies: movie_information = new movie_information();
    movies.id = createMoviesDto.id;
    movies.title = createMoviesDto.title;
    movies.poster_path = createMoviesDto.poster_path;
    movies.overview = createMoviesDto.overview;
    movies.release_date = createMoviesDto.release_date;
    return await this.moviesRepository.save(movies);
  }

  findAllMovies(): Promise<movie_information[]> {
    return this.moviesRepository.find();
  }

  findOne(id: number): Promise<movie_information> {
    return this.moviesRepository.findOne({ where: { id: id } });
  }

  removeUser(id: number): Promise<{ affected?: number }> {
    return this.moviesRepository.delete(id);
  }
}
