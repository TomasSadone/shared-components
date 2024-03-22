import { ReactNode } from 'react';
import style from './style.module.sass';

type Props = {
  children: ReactNode;
};

export const Table = ({ children }: Props) => <div className={style.table}>{children}</div>;
