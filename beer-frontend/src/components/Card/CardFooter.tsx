import { FC, ReactNode } from 'react';

import './CardFooter.css';

interface Props {
  children: ReactNode;
}

const CardFooter: FC<Props> = ({ children }) => {
  return <h2 className='card__footer'>{children}</h2>;
};
export default CardFooter;
