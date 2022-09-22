import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import BeerEntity from '~domain/entities/beer.entity';

import { GetBeersQuery } from './get-beers.query';

@QueryHandler(GetBeersQuery)
export default class GetBeersHandler implements IQueryHandler<GetBeersQuery> {
  constructor(
    @InjectRepository(BeerEntity)
    private readonly repository: Repository<BeerEntity>,
  ) {}

  async execute(): Promise<{ total: number; beers: BeerEntity[] }> {
    const [beers, total] = await this.repository.findAndCount();

    return { beers, total };
  }
}
