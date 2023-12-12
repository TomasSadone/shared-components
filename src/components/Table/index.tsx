import { ReactNode } from 'react';
import style from './style.module.sass';

type Props = {
  children: ReactNode;
};

const Table = ({ children }: Props) => <div className={style.table}>{children}</div>;

export default Table;
