import { AddBeerFn } from './beer.context.interface';

const addBeer: AddBeerFn = ({ newBeer, setCurrentBeer, setHistory }) => {
  setCurrentBeer(() => newBeer);
  setHistory((beers) => [...beers, newBeer]);
};

export { addBeer };
