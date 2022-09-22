import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import AdaptorModule from '~adaptor/adaptor.module';
import ApplicationModule from '~application/application.module';
import BeerEntity from '~domain/entities/beer.entity';
import BeerRandomCounterEntity from '~domain/entities/beer-random-counter.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'At9oOhAGIT8w',
      database: 'bizcuit',
      entities: [BeerEntity, BeerRandomCounterEntity],
      synchronize: true,
      useUTC: true,
      logger: 'debug',
    }),
    AdaptorModule,
    ApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
