import React from 'react';
import style from './style.module.sass';

type Props = {
  children: React.ReactNode;
  padding?: number;
  className?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const BackgroundCard = ({ children, padding = 12, className }: Props) => (
  <div style={{ padding: `${padding}px` }} className={[className, style.card].join(' ')}>
    {children}
  </div>
);
