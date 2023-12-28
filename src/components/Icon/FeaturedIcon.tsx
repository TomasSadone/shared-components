import { AppColors } from 'types/MainTypes';
import Icon, { IconProps } from '.';
import styles from './Icons.module.sass';
import cn from 'classnames';

type Props = IconProps & {
  color?: AppColors | 'gray';
};

const FeaturedIcon: React.FC<Props> = ({ color = 'gray', name, viewBox, ...props }) => (
  <div className={cn(styles[`wrapper_${color}`])}>
    <Icon className={styles.layout} name={name} size={24} viewBox={viewBox} {...props} />
  </div>
);

export default FeaturedIcon;
