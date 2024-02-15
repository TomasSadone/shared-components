import { ReactNode } from 'react';
import style from './style.module.sass';

type Props = {
  children: ReactNode;
  fullWidth: boolean;
  design?: 'default' | 'container' | 'underline';
};

export const HorizontalTabs = ({ children, fullWidth, design = 'default' }: Props) => (
  <div className={`${style.horizontalTabs}  ${fullWidth && style.fullWidth} ${style[design]}`}>
    {children}
  </div>
);
