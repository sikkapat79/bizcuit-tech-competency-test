import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import AdaptorModule from '~adaptor/adaptor.module';
import ApplicationModule from '~application/application.module';
import BeerEntity from '~domain/entities/beer.entity';
import BeerRandomCounterEntity from '~domain/entities/beer-random-counter.entity';

import IConfiguariton from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<IConfiguariton>) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT') || 5432,
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [BeerEntity, BeerRandomCounterEntity],
        synchronize: true, // please note in mind that current situation is in development mode
        useUTC: true,
      }),
    }),
    AdaptorModule,
    ApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
