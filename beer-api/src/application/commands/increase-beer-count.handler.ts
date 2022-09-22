import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import BeerRandomCounterEntity from '~domain/entities/beer-random-counter.entity';

import { IncreaseBeerCountCommand } from './increase-beer-count.command';

@CommandHandler(IncreaseBeerCountCommand)
export default class IncreaseBeerCountHandler
  implements ICommandHandler<IncreaseBeerCountCommand>
{
  constructor(
    @InjectRepository(BeerRandomCounterEntity)
    private readonly repository: Repository<BeerRandomCounterEntity>,
  ) {}

  async execute({
    countId: _id,
    currentCount,
  }: IncreaseBeerCountCommand): Promise<BeerRandomCounterEntity> {
    return this.repository.save({ _id, count: ++currentCount });
  }
}
