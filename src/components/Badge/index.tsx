import cn from 'classnames';
import styles from './Badge.module.sass';
import { AppColors } from 'types/MainTypes';

const Badge: React.FC<{ text: string; withDot?: boolean; color?: AppColors | 'pink' }> = ({
  text,
  withDot,
  color,
}) => (
  <div className={cn('badge', styles[color || 'default'], { [styles.dot]: withDot })}>
    {text}
  </div>
);

export default Badge;
