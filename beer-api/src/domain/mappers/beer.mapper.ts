import { Builder } from 'builder-pattern';

import BeerEntity from '../entities/beer.entity';
import { Beer } from '../models/beer.model';

export class BeerMapper {
  static toDomain({
    counter: { count: randomCount },
    ...beer
  }: BeerEntity): Beer {
    return Builder<Beer>()
      .id(beer._id)
      .uid(beer.uid)
      .brand(beer.brand)
      .name(beer.name)
      .style(beer.style)
      .hop(beer.hop)
      .yeast(beer.yeast)
      .malts(beer.malts)
      .ibu(beer.ibu)
      .alcohol(beer.alcohol)
      .blg(beer.blg)
      .randomCount(randomCount)
      .build();
  }
}
