import { FC, ReactNode } from 'react';
import './Card.css';
import CardTitle from './CardTitle';
import CardSubTitle from './CardSubTitle';
import CardFooter from './CardFooter';
import Divider from '../Divider';

interface Props {
  children?: ReactNode;
  title?: string;
  subTitle?: string;
  footer?: string;
}

const Card: FC<Props> = ({ children, title, subTitle, footer }) => {
  return (
    <section className='card'>
      {title && <CardTitle>{title}</CardTitle>}
      {subTitle && <CardSubTitle>{subTitle}</CardSubTitle>}
      {(title || subTitle) && <Divider />}
      {children}
      {footer && <CardFooter>{footer}</CardFooter>}
    </section>
  );
};
export default Card;
