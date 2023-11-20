import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { movie_information } from './entities/movie_information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([movie_information])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
