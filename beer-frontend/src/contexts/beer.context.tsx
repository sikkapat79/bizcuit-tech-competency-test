import * as _ from 'lodash';
import {
  useState,
  FC,
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { Beer, IBeerStore } from '../models/beer.model';
import {
  addBeer as _addBeer,
  selectPreviousBeer as _selectPreviousBeer,
} from './beer.context.controller';
import { IBeerContext } from './beer.context.interface';

const BeerContext = createContext<IBeerContext>(undefined!);

interface Props {
  children: ReactNode;
}

const BeerContextProvider: FC<Props> = ({ children }) => {
  const [beerStore, setBeerStore] = useState<IBeerStore>({});
  const [currentBeerUid, setCurrentBeerUid] = useState<string>('');
  const [currentSelectedHistoryIndex, setCurrentSelectedHistoryIndex] =
    useState<number>(-1);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    if (!_.isNil(currentSelectedHistoryIndex))
      setCurrentBeerUid(() => history[currentSelectedHistoryIndex]);
  }, [currentSelectedHistoryIndex]);

  const addBeer = (newBeer: Beer) =>
    _addBeer({
      newBeer,
      setHistory,
      setBeerStore,
      setCurrentSelectedHistoryIndex,
    });

  const selectPreviousBeer = () =>
    _selectPreviousBeer(
      currentSelectedHistoryIndex,
      setCurrentSelectedHistoryIndex
    );

  const defaultBeerContext: IBeerContext = {
    currentBeerUid,
    currentSelectedHistoryIndex,
    history,
    beerStore,
    addBeer,
    selectPreviousBeer,
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
