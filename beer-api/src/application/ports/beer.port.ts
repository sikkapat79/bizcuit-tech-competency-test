import BeerIdDto from '~adaptor/inbound/dtos/beer-id.dto';
import CreateBeerDto from '~adaptor/inbound/dtos/create-beer.dto';
import { Beer } from '~domain/models/beer.model';

export interface BeerPort {
  /**
   * Get all beers from database
   *
   * @return {*}  {Promise<Beer[]>}
   * @memberof BeerPort
   */
  getBeers(): Promise<{ total: number; beers: Beer[] }>;

  /**
   * Get beer by id
   *
   * @param {BeerIdDto} beer
   * @return {*}  {Promise<Beer>}
   * @memberof BeerPort
   */
  getBeerById(beer: BeerIdDto): Promise<Beer>;

  /**
   * Random beer and increase count
   *
   * @return {*}  {Promise<Beer>}
   * @memberof BeerPort
   */
  getRandomBeer(): Promise<Beer>;

  /**
   * Create beer handler
   *
   * @param {CreateBeerDto} createBeerDto
   * @return {*}  {Promise<Beer>}
   * @memberof BeerPort
   */
  createBeer(createBeerDto: CreateBeerDto): Promise<Beer>;
}
