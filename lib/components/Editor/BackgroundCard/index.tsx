import React from 'react';
import style from './style.module.sass';

type Props = {
  children: React.ReactNode;
  padding?: number;
<<<<<<< HEAD
};
=======
  className?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
>>>>>>> 29609ce (make classname opitonal)

export const BackgroundCard = ({ children, padding = 12 }: Props) => (
  <div style={{ padding: `${padding}px` }} className={style.card}>
    {children}
  </div>
);
