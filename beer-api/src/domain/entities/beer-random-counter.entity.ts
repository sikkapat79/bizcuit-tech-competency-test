import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import BeerEntity from './beer.entity';

@Entity('beer_random_counters')
export default class BeerRandomCounterEntity {
  @PrimaryGeneratedColumn('increment')
  public readonly _id: number;

  @Column({ default: 0, unsigned: true })
  public count: number;

  @OneToOne(() => BeerEntity, (b) => b.counter)
  @JoinColumn({ name: 'beer_id' })
  beer: BeerEntity;
}
