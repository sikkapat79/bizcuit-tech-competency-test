import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const CardBody: FC<Props> = ({ children }) => {
  return <div className='card__body'>{children}</div>;
};
export default CardBody;
