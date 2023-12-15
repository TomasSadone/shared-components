import { ButtonHTMLAttributes } from 'react';
import { icons } from 'constants/svgIcons';
import Icon, { IconProps } from 'components/Icon';
import styles from './Button.module.sass';
import cn from 'classnames';
import Loader from 'components/Loader';
import { AppColors } from 'types/MainTypes';

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
export const AppButton: React.FC<IAppButtonProps> = ({
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
}) => (
  <button
    disabled={isLoading}
    className={cn('button', color, { secondary, stroke, text })}
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
