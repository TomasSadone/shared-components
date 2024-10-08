import cn from 'classnames';
import type { FC } from 'react';
import styles from './Loader.module.sass';

type LoaderProps = {
  className?: string;
  color?: 'red' | 'green' | 'blue' | 'orange';
  useColor?: boolean;
};
export const Loader: FC<LoaderProps> = ({ className, color, useColor }) => (
  <div
    className={cn(styles.loader, className, {
      [styles[`loader_${useColor ? color : 'white'}`] as string]: !!color,
    })}
  />
);
