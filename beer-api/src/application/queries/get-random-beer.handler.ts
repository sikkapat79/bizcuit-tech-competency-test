import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import BeerEntity from '~domain/entities/beer.entity';
import BeerRandomCounterEntity from '~domain/entities/beer-random-counter.entity';

import { GetRandomBeerQuery } from './get-random-beer.query';

@QueryHandler(GetRandomBeerQuery)
export default class GetRandomBeerHandler
  implements IQueryHandler<GetRandomBeerQuery>
{
  constructor(
    @InjectRepository(BeerEntity)
    private readonly repository: Repository<BeerEntity>,
  ) {}

  async execute(): Promise<BeerEntity> {
    return this.repository
      .createQueryBuilder('beer')
      .select()
      .orderBy('RANDOM()')
      .innerJoinAndSelect('beer.counter', 'counter')
      .getOne();
  }
}
