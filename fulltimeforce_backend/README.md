## General Information

This is the backend (NestJS) for the movies application created by Juan Ordosgoite. We will have a database (postgreSQL) with several movies.

Movies: (id:number, title:string, overview:string, poster_path:string, release_date:string);

find by id moview API was developed. It will search for the movie by the ID provided by the user. It will look for the info in our database, but if the movie does not exist there, it will for for the information in the external API (TMBD API - https://www.themoviedb.org/) and it will save this info in our database so we won't have to get this info again by the external API.

The port defined was 3001. So the api to fetch the movies is http://localhost:3001/movies/:id

The database structure is the following:

name: movies
table name: movie_information (id:number, title:string, overview:string, poster_path:string, release_date:string)

Constraints:

You must have a table with the structure mentioned above called movie_information.
This table should be part of a public schema database. You can set up your database configuration on: src\app.module.ts
For this project, PostgreSQL 11 was used to build the database.
A database backup is located in the backend root folder - db_movies.sql. It can be imported using postgreSQL commands (or PgAdmin).

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
