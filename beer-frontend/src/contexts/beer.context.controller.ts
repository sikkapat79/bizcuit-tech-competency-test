import { Beer } from '../models/beer.model';
import { AddBeerFn, SelectPreviousBeerFn } from './beer.context.interface';

const addBeer: AddBeerFn = ({
  newBeer,
  setBeerStore,
  setHistory,
  setCurrentSelectedHistoryIndex,
}) => {
  let lastHistory = 0;
  setBeerStore((beers: Beer) => ({ ...beers, [newBeer.uid]: newBeer }));
  setHistory((beerUids) => {
    const newHistory = [...beerUids, newBeer.uid];

    lastHistory = newHistory.length - 1;
    setCurrentSelectedHistoryIndex(() => lastHistory);

    return newHistory;
  });
};

const selectPreviousBeer: SelectPreviousBeerFn = (currentIdx, setState) => {
  if (currentIdx <= 0) return setState(() => 0);

  return setState((previousIdx) => --previousIdx);
};

export { addBeer, selectPreviousBeer };
