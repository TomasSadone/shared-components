import { ReactNode } from 'react';
import style from './style.module.sass';

type Props = {
  children: ReactNode;
};

export const AuthCodeInputLabel = ({ children }: Props) => (
  <label className={style.label}>{children}</label>
);
