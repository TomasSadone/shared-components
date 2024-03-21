import { icons } from '../../constants/svgIcons';
import { Icon } from '../icon';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.sass';
import { AppColors } from '../../types/MainTypes';

type MenuItemProps = {
  title: string;
  color: AppColors;
  icon?: keyof typeof icons;
  link: string;
};

export const MenuItem: React.FC<MenuItemProps> = ({ title, color, icon, link }) => (
  <NavLink
    to={link}
    className={({ isActive }) => cn(styles.link, { [styles[color]]: isActive })}
  >
    {icon && <Icon name={icon} size={24} />}
    {title}
  </NavLink>
);
