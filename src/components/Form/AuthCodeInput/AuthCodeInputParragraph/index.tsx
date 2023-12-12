import { ReactNode } from 'react';
import style from './style.module.sass';

type Props = {
  children: ReactNode;
  error?: boolean;
};

export const AuthCodeInputParragraph = ({ children, error }: Props) => (
  <p className={`${style.parragraph} ${error ? style.error : style.hint} `}>{children}</p>
);

export default AuthCodeInputParragraph;
