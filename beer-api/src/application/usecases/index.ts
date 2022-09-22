import CreateBeerUseCase from './create-beer.usecase';
import GetBeerByIdUseCase from './get-beer-by-id.usecase';
import GetBeersUseCase from './get-beers.usecase';
import GetRandomBeerUseCase from './get-random-beer.usecase';

const useCases = [
  CreateBeerUseCase,
  GetBeerByIdUseCase,
  GetBeersUseCase,
  GetRandomBeerUseCase,
];

export {
  CreateBeerUseCase,
  GetBeerByIdUseCase,
  GetBeersUseCase,
  GetRandomBeerUseCase,
  useCases,
};
