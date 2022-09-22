import { Injectable, NotFoundException } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import * as _ from 'lodash';

import { GetBeerByIdQuery } from '~application/queries/get-beer-by-id.query';
import BeerEntity from '~domain/entities/beer.entity';
import { BeerMapper } from '~domain/mappers/beer.mapper';
import { Beer } from '~domain/models/beer.model';

@Injectable()
export default class GetBeerByIdUseCase {
  constructor(private readonly queryBus: QueryBus) {}

  async handler(beerId: number): Promise<Beer> {
    const beer = await this.queryBus.execute<GetBeerByIdQuery, BeerEntity>(
      new GetBeerByIdQuery(beerId),
    );
    this.validateIsBeerExisted(beer);

    return BeerMapper.toDomain(beer);
  }

  private validateIsBeerExisted(beer: BeerEntity) {
    const isBeerExisted = !(_.isNil(beer) || _.isEmpty(beer));
    if (!isBeerExisted) throw new NotFoundException();
  }
}
