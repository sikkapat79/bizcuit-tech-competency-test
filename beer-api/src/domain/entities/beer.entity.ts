import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import BeerRandomCounterEntity from './beer-random-counter.entity';

@Entity('beers')
export default class BeerEntity {
  @PrimaryGeneratedColumn('increment')
  public readonly _id: number;

  @Column('varchar', { unique: true })
  public uid: string;

  @Column('varchar')
  public brand: string;

  @Column('varchar')
  public name: string;

  @Column('varchar')
  public style: string;

  @Column('varchar')
  public hop: string;

  @Column('varchar')
  public yeast: string;

  @Column('varchar')
  public malts: string;

  @Column('varchar')
  public ibu: string;

  @Column('varchar')
  public alcohol: string;

  @Column('varchar')
  public blg: string;

  @OneToOne(() => BeerRandomCounterEntity, (c) => c.beer, {
    eager: true,
    cascade: true,
  })
  public counter: BeerRandomCounterEntity;
}
