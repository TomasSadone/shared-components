import { Icon, IconProps } from '../icon';
import styles from './icon-button.module.sass';
import { AppColors } from '../../types/MainTypes';
import { icons } from '../../constants/svgIcons';
import cn from 'classnames';
import { Loader } from '../loader';

export const IconButton: React.FC<{
  icon: keyof typeof icons;
  iconProps?: Omit<IconProps, 'name'>;
  onClick?: () => void;
  color?: AppColors;
  isLoading?: boolean;
}> = ({ icon, onClick, color, isLoading, iconProps }) => (
  <button
    disabled={isLoading}
    onClick={onClick}
    className={cn(styles.button, styles[color || 'default'])}
  >
    {isLoading ? (
      <Loader color={color} useColor className={styles.loader} />
    ) : (
      <Icon {...iconProps} name={icon} size={iconProps?.size || 20} />
    )}
  </button>
);
