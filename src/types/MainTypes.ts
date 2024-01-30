import { icons } from 'constants/svgIcons';

export type AppColors = 'orange' | 'green' | 'red' | 'blue';
export type Icons = keyof typeof icons;
export type MenuItem = {
  link: string;
  title: string;
  color: AppColors;
  icon: Icons;
};
export type DropdownItem = {
  title: string;
  color: AppColors;
  icon: Icons;
  items: { link: string; title: string }[];
};
export type SelectOptions = {
  label: string;
  value: string;
};
