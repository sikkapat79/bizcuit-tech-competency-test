import GetBeerByIdHandler from './get-beer-by-id.handler';
import GetBeersHandler from './get-beers.handler';
import GetRandomBeerHandler from './get-random-beer.handler';

export * from './get-random-beer.query';

const queriesHandlers = [
  GetBeerByIdHandler,
  GetBeersHandler,
  GetRandomBeerHandler,
];

export {
  GetBeerByIdHandler,
  GetBeersHandler,
  GetRandomBeerHandler,
  queriesHandlers,
};
