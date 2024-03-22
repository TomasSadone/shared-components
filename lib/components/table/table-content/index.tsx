import { ReactNode } from 'react';
import style from './style.module.sass';

type Props = { children: ReactNode };

export const TableContent = ({ children }: Props) => (
  <div className={style.tableContent}>
    <table>{children}</table>
  </div>
);
