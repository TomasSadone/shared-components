import { ReactNode } from 'react';
import style from './style.module.sass';

type Props = {
  children: ReactNode;
  fullWidth: boolean;
};

export const HorizontalTabs = ({ children, fullWidth }: Props) => (
  <div className={`${style.horizontalTabs}  ${fullWidth && style.fullWidth}`}>{children}</div>
);
