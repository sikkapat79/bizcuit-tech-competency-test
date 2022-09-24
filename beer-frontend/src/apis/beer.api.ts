import axios from '../libs/axiosInstance';

import { Beer } from '../models/beer.model';

const beersEndpointV1 = '/v1/beers';

const getRandomBeer = async (): Promise<Beer> => {
  const beer = await getBeerByParam('random');

  return beer;
};

const getBeerByParam = async (beerIdOrRandom: string): Promise<Beer> => {
  const endpoint = `${beersEndpointV1}/${beerIdOrRandom}`;
  const result = await axios.get<Beer>(endpoint);

  return result.data;
};

export { getRandomBeer, getBeerByParam };
