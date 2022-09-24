import { FC, ReactNode } from 'react';

import './CardTitle.css';

interface Props {
  children: ReactNode;
}

const CardTitle: FC<Props> = ({ children }) => {
  return <h1 className='card__title'>{children}</h1>;
};
export default CardTitle;
