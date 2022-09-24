import { FC, ReactNode } from 'react';

import './CardSubTitle.css';

interface Props {
  children: ReactNode;
}

const CardSubTitle: FC<Props> = ({ children }) => {
  return <h2 className='card__sub-title'>{children}</h2>;
};
export default CardSubTitle;
