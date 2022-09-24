import { FC } from 'react';

import CardFooter from '../../components/Card/CardFooter';
import Card from '../../components/Card';
import Divider from '../../components/Divider';

import { Beer } from '../../models/beer.model';

interface Props {
  beer: Beer;
}

const BeerDetail: FC<Props> = ({ beer }) => {
  return (
    <Card title={beer.name} subTitle={beer.brand}>
      <ul>
        <li className='beer__description'>
          <span className='beer__description--label'>Style</span>
          <span>{beer.style}</span>
        </li>
        <li className='beer__description'>
          <span className='beer__description--label'>Hop</span>
          <span>{beer.hop}</span>
        </li>
        <li className='beer__description'>
          <span className='beer__description--label'>Yeast</span>
          <span>{beer.yeast}</span>
        </li>
        <li className='beer__description'>
          <span className='beer__description--label'>IBU</span>
          <span>{beer.ibu}</span>
        </li>
        <li className='beer__description'>
          <span className='beer__description--label'>Alcohol</span>
          <span>{beer.alcohol}</span>
        </li>
        <li className='beer__description'>
          <span className='beer__description--label'>BLG</span>
          <span>{beer.blg}</span>
        </li>
      </ul>

      <Divider />

      <CardFooter>
        <div>uid: {beer.uid}</div>
        <div>Random count: {beer.randomCount}</div>
      </CardFooter>
    </Card>
  );
};
export default BeerDetail;
