import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMoviesDto } from './dto/create-movie.dto';
import axios from 'axios';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMoviesDto) {
    //console.log('this is createMovieDTO',createMovieDto);
    return await this.moviesService.createMovie(createMovieDto);
  }

  @Get()
  findAll() {
    return this.moviesService.findAllMovies();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const chkIfExists: any = await this.moviesService.findOne(id);
    if (!chkIfExists) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=ebc19cd915e044f83948e528b44d4d98&language=en-US`,
        )
        .then((res: any) => {
          const newMovie = {
            id: res.data.id,
            title: res.data.title,
            poster_path: res.data.poster_path,
            overview: res.data.overview,
            release_date: res.data.release_date,
          };
          this.moviesService.createMovie(newMovie);
          return newMovie;
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      return this.moviesService.findOne(id);
    }
  }
}
