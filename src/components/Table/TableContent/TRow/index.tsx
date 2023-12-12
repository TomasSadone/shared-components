import { ReactNode } from 'react';
import style from './style.module.sass';

type Props = {
  children: ReactNode;
  darkerBackground?: 'never' | 'always' | 'intermitent';
  border?: boolean;
};

const TRow = ({ children, darkerBackground = 'never', border = true }: Props) => (
  <tr className={`${style.tRow} ${style[darkerBackground]} ${border && style.border}`}>
    {children}
  </tr>
);

export default TRow;
