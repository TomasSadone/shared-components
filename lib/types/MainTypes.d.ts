import { icons } from '../constants/svg-icons';

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
export type SelectOptions = {
  label: string;
  value: string;
};
export type FontTypes =
  | 'Abril Fatface'
  | 'Amatic SC'
  | 'Arimo'
  | 'Bebas Neue'
  | 'Caveat Brush'
  | 'Dancing Script'
  | 'Itim'
  | 'Josefine Sans'
  | 'Londrina Shadow'
  | 'Pacifico'
  | 'Playfair Display'
  | 'Poppins'
  | 'Signika'
  | 'Tenor Sans'
  | 'Tinos';
