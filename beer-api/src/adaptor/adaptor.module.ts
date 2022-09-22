import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import BeerEntity from '~domain/entities/beer.entity';
import BeerRandomCounterEntity from '~domain/entities/beer-random-counter.entity';

import BeerController from './inbound/controllers/beer.controller';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([BeerEntity, BeerRandomCounterEntity])],
  controllers: [BeerController],
  exports: [TypeOrmModule],
})
export default class AdaptorModule {}
