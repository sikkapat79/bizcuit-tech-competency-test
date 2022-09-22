import { Builder } from 'builder-pattern';

import { CreateBeerCommand } from '~application/commands';
import BeerEntity from '~domain/entities/beer.entity';
import BeerRandomCounterEntity from '~domain/entities/beer-random-counter.entity';

export default class BeerFactory {
  static create(command: CreateBeerCommand): BeerEntity {
    const DEFAULT_COUNT = 0;
    const count = Builder(BeerRandomCounterEntity).count(DEFAULT_COUNT).build();

    return Builder(BeerEntity)
      .counter(count)
      .uid(command.uid)
      .brand(command.brand)
      .name(command.name)
      .style(command.style)
      .hop(command.hop)
      .yeast(command.yeast)
      .malts(command.malts)
      .ibu(command.ibu)
      .alcohol(command.alcohol)
      .blg(command.blg)
      .build();
  }
}
