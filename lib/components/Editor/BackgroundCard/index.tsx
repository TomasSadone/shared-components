import React from 'react';
import style from './style.module.sass';

export type Props = {
  children: React.ReactNode;
  padding?: number;
};

export const BackgroundCard = ({ children, padding = 12 }: Props) => (
  <div style={{ padding: `${padding}px` }} className={style.card}>
    {children}
  </div>
);
