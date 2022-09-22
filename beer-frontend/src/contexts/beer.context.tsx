import { useState, FC, createContext, ReactNode, useContext } from 'react';
import { Beer } from '../models/beer.model';
import { addBeer as _addBeer } from './beer.context.controller';

interface IBeerContext {
  currentBeer?: Beer;
  history: Beer[];
  addBeer: (newBeer: Beer) => void;
}

const BeerContext = createContext<IBeerContext>(undefined!);

interface Props {
  children: ReactNode;
}

const BeerContextProvider: FC<Props> = ({ children }) => {
  const [currentBeer, setCurrentBeer] = useState<Beer | undefined>();
  const [history, setHistory] = useState<Beer[]>([]);

  const addBeer = (newBeer: Beer) =>
    _addBeer({ newBeer, setHistory, setCurrentBeer });

  const defaultBeerContext: IBeerContext = {
    currentBeer,
    history,
    addBeer,
  };

  return (
    <BeerContext.Provider value={{ ...defaultBeerContext }}>
      {children}
    </BeerContext.Provider>
  );
};

const useBeerContext = () => useContext(BeerContext);

export { useBeerContext };

export default BeerContextProvider;
