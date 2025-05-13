import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Vegetable {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  detail: string;

  @Column()
  icon: string;
}
