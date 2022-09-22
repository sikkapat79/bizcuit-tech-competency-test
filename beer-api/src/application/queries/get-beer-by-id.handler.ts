import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import BeerEntity from '~domain/entities/beer.entity';

import { GetBeerByIdQuery } from './get-beer-by-id.query';

@QueryHandler(GetBeerByIdQuery)
export default class GetBeerByIdHandler
  implements IQueryHandler<GetBeerByIdQuery>
{
  constructor(
    @InjectRepository(BeerEntity)
    private readonly repository: Repository<BeerEntity>,
  ) {}

  async execute({ beerId: _id }: GetBeerByIdQuery): Promise<BeerEntity> {
    return this.repository.findOneBy({ _id });
  }
}
