import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'movie_information', synchronize: false })
export class movie_information {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', length: 15 })
  title: string;

  @Column({ type: 'varchar', length: 40 })
  poster_path: string;

  @Column({ type: 'varchar' })
  overview: string;

  @Column({ type: 'varchar' })
  release_date: string;
}
