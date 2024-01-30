import React from 'react';
import style from './style.module.sass';

type Props = {
  children: React.ReactNode;
  padding?: number;
  className?: string;
};

export const BackgroundCard = ({ children, padding = 12, className }: Props) => (
  <div style={{ padding: `${padding}px` }} className={[style.card, className].join(' ')}>
    {children}
  </div>
);
