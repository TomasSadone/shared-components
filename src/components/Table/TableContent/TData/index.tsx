import { ReactNode } from 'react';
import style from './style.module.sass';

type Props = {
  children: ReactNode;
  location?: 'body' | 'head';
};

const TData = ({ children, location = 'body' }: Props) => (
  <td className={`${style.tData} ${style[location]}`}>{children}</td>
);

export default TData;
