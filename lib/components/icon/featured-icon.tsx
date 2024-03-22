import { AppColors } from '../../types/MainTypes';
import { Icon, IconProps } from '.';
import styles from './Icons.module.sass';
import { icons } from '../../constants/svg-icons';
import cn from 'classnames';

type Props = IconProps & {
  color: AppColors | 'gray';
  name: keyof typeof icons;
  viewBox?: string;
};

export const FeaturedIcon: React.FC<Props> = ({ color, name, viewBox }) => (
  <div className={cn(styles[`wrapper_${color}`])}>
    <Icon className={styles.layout} name={name} size={24} viewBox={viewBox} />
  </div>
);
