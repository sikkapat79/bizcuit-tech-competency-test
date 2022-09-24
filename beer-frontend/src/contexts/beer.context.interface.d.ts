import { Dispatch, SetStateAction } from 'react';
import { Beer } from '../models/beer.model';

type SetCurrentSelectedHistoryIndexState = Dispatch<SetStateAction<number>>;

export interface AddBeerCommand {
  newBeer: Beer;
  setBeerStore: Dispatch<SetStateAction<IBeerStore>>;
  setHistory: Dispatch<SetStateAction<string[]>>;
  setCurrentSelectedHistoryIndex: SetCurrentSelectedHistoryIndexState;
}

export type AddBeerFn = (addBeerCommand: AddBeerCommand) => void;
export type SelectPreviousBeerFn = (
  currentIdx: number,
  setState: SetCurrentSelectedHistoryIndexState
) => void;

export interface IBeerContext {
  currentBeerUid: string;
  currentSelectedHistoryIndex: number;
  history: string[];
  beerStore: IBeerStore;

  /**
   * Add new random beer to store
   *
   * @param {Beer} newBeer
   */
  addBeer: (newBeer: Beer) => void;

  /**
   * Select previous beer in history
   *
   */
  selectPreviousBeer: () => void;
}
