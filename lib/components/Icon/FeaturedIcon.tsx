import { AppColors } from '../../types/MainTypes';
import { Icon } from './';
import styles from './Icons.module.sass';
import { icons } from '../../constants/svgIcons';
import cn from 'classnames';

export const FeaturedIcon: React.FC<{
  color: AppColors;
  name: keyof typeof icons;
  viewBox?: string;
}> = ({ color, name, viewBox }) => (
  <div className={cn(styles[`wrapper_${color}`])}>
    <Icon className={styles.layout} name={name} size={24} viewBox={viewBox} />
  </div>
);
