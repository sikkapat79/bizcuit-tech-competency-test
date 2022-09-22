import { Dispatch, SetStateAction } from 'react';
import { Beer } from '../models/beer.model';

export interface AddBeerCommand {
  newBeer: Beer;
  setCurrentBeer: Dispatch<SetStateAction<Beer | undefined>>;
  setHistory: Dispatch<SetStateAction<Beer[]>>;
}

export type AddBeerFn = (addBeerCommand: AddBeerCommand) => void;
