import { FC, MouseEventHandler, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Loading from '../Loading';

import './Button.css';
import { match } from 'ts-pattern';

type ButtonType = 'default' | 'primary' | 'secondary';

interface Props {
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
}

const Button: FC<Props> = ({ onClick, children, disabled, loading, type }) => {
  const getButtonType = (_type: string) =>
    match(_type)
      .with('primary', () => ' button--primary')
      .with('secondary', () => ' button--secondary')
      .otherwise(() => '');

  return (
    <button
      className={`button${type ? getButtonType(type) : ''}`}
      onClick={onClick}
      disabled={disabled || loading} // force to disabled button when loading indicator is active to prevent multiple click
    >
      <AnimatePresence>
        {loading && (
          <motion.span
            initial={{ x: '-60%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-60%', opacity: 0 }}
            className='button__loading'
          >
            <Loading />
          </motion.span>
        )}
      </AnimatePresence>
      <span>{children}</span>
    </button>
  );
};
export default Button;
