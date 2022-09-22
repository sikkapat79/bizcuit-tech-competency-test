import { FC, MouseEventHandler, ReactNode } from 'react';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button: FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};
export default Button;
