import { ButtonHTMLAttributes } from 'react';
import { icons } from '../../constants/svgIcons';
import { IconProps } from '../Icon';
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
export declare const AppButton: ({ title, color, icon, iconProps, endIcon, endIconProps, secondary, stroke, text, isLoading, ...buttonProps }: IAppButtonProps) => import("react/jsx-runtime").JSX.Element;
