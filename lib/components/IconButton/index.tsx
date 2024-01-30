import { Icon, IconProps } from '../Icon';
import styles from './IconButton.module.sass';
import { AppColors } from '../../types/MainTypes';
import { icons } from '../../constants/svgIcons';
import cn from 'classnames';
import { Loader } from '../Loader';
import { ButtonHTMLAttributes } from 'react';

type Props = {
  icon: keyof typeof icons;
  iconProps?: Omit<IconProps, 'name' | 'size'>;
  onClick?: () => void;
  color?: AppColors;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton: React.FC<Props> = ({
  icon,
  onClick,
  color,
  isLoading,
  iconProps,
}) => (
  <button
    disabled={isLoading}
    onClick={onClick}
    className={cn(styles.button, styles[color || 'default'])}
  >
    {isLoading ? (
      <Loader color={color} useColor className={styles.loader} />
    ) : (
      <Icon {...iconProps} name={icon} size={20} />
    )}
  </button>
);
