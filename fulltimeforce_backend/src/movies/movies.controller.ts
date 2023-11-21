import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMoviesDto } from './dto/create-movie.dto';
import axios from 'axios';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMoviesDto) {
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
      const movieInfo = await axios
        .get(
          `${process.env.TBDM_API_PATH}${id}${process.env.TBDM_API_QUERY_AND_KEY}`,
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
        })
        .catch((err: any) => {
          console.log(err);
        });
      return movieInfo;
    } else {
      return this.moviesService.findOne(id);
    }
  }
  // Delete service was created for development purposes
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesService.removeUser(id);
  }
}
