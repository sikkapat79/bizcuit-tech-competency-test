import { useMemo, useState } from 'react';
import * as _ from 'lodash';

import { useBeerContext } from '../../contexts/beer.context';
import Loading from '../../components/Loading';
import { getRandomBeer } from '../../apis/beer.api';
import { Button } from '../../components/Buttons';

import './Beer.page.css';
import BeerDetail from './BeerDetail';
import { Beer } from '../../models/beer.model';

const BeerPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    beerStore,
    currentBeerUid,
    currentSelectedHistoryIndex,
    addBeer,
    selectPreviousBeer,
  } = useBeerContext();

  const beer = useMemo<Beer>(
    () => beerStore[currentBeerUid],
    [currentBeerUid, beerStore]
  );
  const isBackButtonDisabled = useMemo(
    () => _.isNil(beer) || _.isEmpty(beer) || currentSelectedHistoryIndex <= 0,
    [beer, currentSelectedHistoryIndex]
  );

  const handleRandomBeerClicked = async () => {
    setIsLoading(() => true);
    const _beer = await getRandomBeer();

    setTimeout(() => {
      setIsLoading(() => false);
      addBeer({ ..._beer });
    }, 2000);
  };

  const handlePreviousBeerClick = selectPreviousBeer;

  return (
    <div className='beer'>
      {!beer && (
        <div className='beer__loading'>
          <Loading />
        </div>
      )}
      {beer && <BeerDetail beer={beer} />}
      <div className='beer__actions'>
        <Button
          type='secondary'
          disabled={
            isBackButtonDisabled ||
            //disabled when there is no data or when fetching is in progress
            isLoading
          }
          onClick={handlePreviousBeerClick}
        >
          Previous beer
        </Button>
        <Button
          onClick={handleRandomBeerClicked}
          loading={isLoading}
          type='primary'
        >
          Get beer please !!
        </Button>
      </div>
    </div>
  );
};
export default BeerPage;
