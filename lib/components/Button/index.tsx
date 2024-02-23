import { ButtonHTMLAttributes } from 'react';
import { icons } from '../../constants/svgIcons';
import { Icon, IconProps } from '../Icon';
import styles from './style.module.sass';
import { Loader } from '../Loader';
import { AppColors } from '../../types/MainTypes';

export interface IAppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: AppColors;
  icon?: keyof typeof icons;
  endIcon?: keyof typeof icons;
  iconProps?: Omit<IconProps, 'name' | 'size'>;
  endIconProps?: Omit<IconProps, 'name' | 'size'>;
  secondary?: boolean;
  stroke?: boolean;
  text?: boolean;
  isLoading?: boolean;
}
export const AppButton = ({
  title,
  color,
  icon,
  iconProps,
  endIcon,
  endIconProps,
  secondary,
  stroke,
  text,
  isLoading,
  ...buttonProps
}: IAppButtonProps) => (
  <button
    disabled={isLoading}
    className={`${styles.button} ${styles[color]} ${secondary && styles.secondary} ${
      stroke && styles.stroke
    } ${text && styles.text}`}
    {...buttonProps}
  >
    {icon && (
      <div className={styles.icon_container}>
        <Icon {...iconProps} name={icon} size={20} />
      </div>
    )}
    {title}
    {endIcon && (
      <div className={styles.end_icon_container}>
        <Icon {...endIconProps} name={endIcon} size={20} />
      </div>
    )}
    {isLoading && <Loader color={stroke || text ? undefined : color} useColor={secondary} />}
  </button>
);
