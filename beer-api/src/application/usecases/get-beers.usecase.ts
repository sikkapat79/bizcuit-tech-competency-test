import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { GetBeersQuery } from '~application/queries/get-beers.query';
import BeerEntity from '~domain/entities/beer.entity';
import { BeerMapper } from '~domain/mappers/beer.mapper';
import { Beer } from '~domain/models/beer.model';

@Injectable()
export default class GetBeersUseCase {
  constructor(private readonly queryBus: QueryBus) {}

  async handler(): Promise<{ total: number; beers: Beer[] }> {
    const { total, beers: _beers } = await this.queryBus.execute<
      GetBeersQuery,
      { total: number; beers: BeerEntity[] }
    >(new GetBeersQuery());

    const beers = _beers.map(BeerMapper.toDomain);

    return { total, beers };
  }
}
