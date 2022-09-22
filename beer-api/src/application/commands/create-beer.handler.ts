import { ConflictException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import * as _ from 'lodash';
import { Repository } from 'typeorm';

import BeerFactory from '~application/factories/beer.factory';
import BeerEntity from '~domain/entities/beer.entity';

import { CreateBeerCommand } from './create-beer.command';

@CommandHandler(CreateBeerCommand)
export default class CreateBeerHandler
  implements ICommandHandler<CreateBeerCommand>
{
  constructor(
    @InjectRepository(BeerEntity)
    private readonly repository: Repository<BeerEntity>,
  ) {}

  async execute(command: CreateBeerCommand): Promise<BeerEntity> {
    // checking for existed beer from database before insert
    const existedBeer = await this.repository.findOneBy({ uid: command.uid });
    const isBeerExisted = !(_.isEmpty(existedBeer) || _.isNil(existedBeer));
    if (isBeerExisted) throw new ConflictException();

    const beer = BeerFactory.create(command);

    return this.repository.save(beer);
  }
}
