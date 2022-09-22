import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Version,
} from '@nestjs/common';

import { BeerPort } from '~application/ports/beer.port';
import {
  CreateBeerUseCase,
  GetBeerByIdUseCase,
  GetBeersUseCase,
  GetRandomBeerUseCase,
} from '~application/usecases';
import { Beer } from '~domain/models/beer.model';

import beerIdDto from '../dtos/beer-id.dto';
import CreateBeerDto from '../dtos/create-beer.dto';

@Controller('beers')
export default class BeerController implements BeerPort {
  constructor(
    private readonly createBeerUseCase: CreateBeerUseCase,
    private readonly getBeersUseCase: GetBeersUseCase,
    private readonly getRandomBeerUseCase: GetRandomBeerUseCase,
    private readonly getBeerByIdUseCase: GetBeerByIdUseCase,
  ) {}

  @Version('1')
  @Get()
  @HttpCode(HttpStatus.OK)
  async getBeers(): Promise<{ total: number; beers: Beer[] }> {
    return this.getBeersUseCase.handler();
  }

  @Version('1')
  @Get('random')
  @HttpCode(HttpStatus.OK)
  async getRandomBeer(): Promise<Beer> {
    return this.getRandomBeerUseCase.handler();
  }

  @Version('1')
  @Get(':beerId')
  @HttpCode(HttpStatus.OK)
  getBeerById(@Param() { beerId }: beerIdDto): Promise<Beer> {
    return this.getBeerByIdUseCase.handler(beerId);
  }

  @Version('1')
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createBeer(@Body() createBeerDto: CreateBeerDto): Promise<Beer> {
    return this.createBeerUseCase.handler(createBeerDto);
  }
}
