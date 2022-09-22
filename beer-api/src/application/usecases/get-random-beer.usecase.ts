import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import * as _ from 'lodash';

import BeerEntity from '~domain/entities/beer.entity';
import BeerRandomCounterEntity from '~domain/entities/beer-random-counter.entity';
import { BeerMapper } from '~domain/mappers/beer.mapper';
import { Beer } from '~domain/models/beer.model';

import { IncreaseBeerCountCommand } from '../commands/increase-beer-count.command';
import { GetRandomBeerQuery } from '../queries';

@Injectable()
export default class GetRandomBeerUseCase {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  /**
   * Get random beer and increase counter
   *
   * @return {*}  {Promise<Beer>}
   * @memberof GetRandomBeerUseCase
   */
  async handler(): Promise<Beer> {
    const beer = await this.getRandomBeer();

    this.validateIsBeerExisted(beer);

    const counter = await this.increaseCount(beer._id, beer.counter.count);

    return BeerMapper.toDomain(_.merge(beer, { counter }));
  }

  private validateIsBeerExisted(beer: BeerEntity) {
    const isBeerExisted = !(_.isNil(beer) || _.isEmpty(beer));
    if (!isBeerExisted) throw new NotFoundException();
  }

  /**
   * Increase random count
   *
   * @private
   * @param {number} countId
   * @param {number} currentCount
   * @return {*}
   * @memberof GetRandomBeerUseCase
   */
  private async increaseCount(countId: number, currentCount: number) {
    return this.commandBus.execute<
      IncreaseBeerCountCommand,
      BeerRandomCounterEntity
    >(new IncreaseBeerCountCommand(countId, currentCount));
  }

  private async getRandomBeer(): Promise<BeerEntity> {
    return this.queryBus.execute<GetRandomBeerQuery, BeerEntity>(
      new GetRandomBeerQuery(),
    );
  }
}
