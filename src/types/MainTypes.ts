import { icons } from 'constants/svgIcons';

export type AppColors = 'orange' | 'green' | 'red' | 'blue';
export type MenuItem = {
  link: string;
  title: string;
  color: AppColors;
  icon: keyof typeof icons;
};
export type DropdownItem = {
  title: string;
  color: AppColors;
  icon: keyof typeof icons;
  items: { link: string; title: string }[];
};
