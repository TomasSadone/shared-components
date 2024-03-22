import cn from 'classnames';
import styles from './Badge.module.sass';
import { AppColors } from '../../types/main-types';

export const Badge: React.FC<{
  text: string;
  withDot?: boolean;
  color?: AppColors | 'pink';
  stroke?: boolean;
}> = ({ text, withDot, color, stroke }) => (
  <div
    className={cn('badge', styles[color || 'default'], {
      [styles.dot]: withDot,
      [styles.stroke]: stroke,
    })}
  >
    <p>{text}</p>
  </div>
);
