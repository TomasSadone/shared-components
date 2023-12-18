/// <reference types="react" />
import { icons } from '../../constants/svgIcons';
export type IconProps = {
    name: keyof typeof icons;
    size?: number;
    className?: string;
    fill?: string;
    viewBox?: string;
    onClick?: () => void;
    stroke?: string;
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
    strokeLinejoin?: 'round' | 'inherit' | 'miter' | 'bevel';
    strokeWidth?: string;
};
export declare const Icon: React.FC<IconProps>;
