import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Builder } from 'builder-pattern';

import CreateBeerDto from '~adaptor/inbound/dtos/create-beer.dto';
import { CreateBeerCommand } from '~application/commands';
import BeerEntity from '~domain/entities/beer.entity';
import { Beer } from '~domain/models/beer.model';

import { BeerMapper } from './../../domain/mappers/beer.mapper';

@Injectable()
export default class CreateBeerUseCase {
  constructor(private readonly commandBus: CommandBus) {}

  async handler(createBeerDto: CreateBeerDto): Promise<Beer> {
    const command = Builder(CreateBeerCommand)
      .uid(createBeerDto.uid)
      .brand(createBeerDto.brand)
      .name(createBeerDto.name)
      .style(createBeerDto.style)
      .hop(createBeerDto.hop)
      .yeast(createBeerDto.yeast)
      .malts(createBeerDto.malts)
      .ibu(createBeerDto.ibu)
      .alcohol(createBeerDto.alcohol)
      .blg(createBeerDto.blg)
      .build();
    const beer = await this.commandBus.execute<CreateBeerCommand, BeerEntity>(
      command,
    );

    return BeerMapper.toDomain(beer);
  }
}
