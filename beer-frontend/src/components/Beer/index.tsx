import { useEffect, useMemo } from 'react';
import { useBeerContext } from '../../contexts/beer.context';
import NoBeerComponent from './NoBeer';

const Beer = () => {
  const { currentBeer, addBeer } = useBeerContext();

  const beer = useMemo(() => currentBeer, [currentBeer]);

  console.log(beer);

  useEffect(() => {
    setTimeout(() => {
      addBeer({
        id: 1,
        brand: 'brand',
        malts: 'malts',
        blg: 'blg',
        name: 'OK',
        uid: '1',
        style: 'style',
        hop: 'hop',
        alcohol: '1%',
        ibu: 'ibu',
        yeast: 'yeast',
        randomCount: 12,
      });
    });
  }, []);

  return (
    <div>
      <NoBeerComponent />
    </div>
  );
};
export default Beer;
