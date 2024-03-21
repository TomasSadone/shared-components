import { Icon } from '../icon';
import { icons } from '../../constants/svgIcons';
import React from 'react';
import styles from './Dropdown.module.sass';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { AppColors } from '../../types/MainTypes';

type DropdownProps = {
  icon?: keyof typeof icons;
  title: string;
  iconViewBox?: string;
  color: AppColors;
  items: { link: string; title: string }[];
};

export const Dropdown: React.FC<DropdownProps> = ({
  icon,
  title,
  iconViewBox,
  color,
  items,
}) => {
  const [visible, setVisible] = React.useState(false);
  const dropdownLinks = items.map((link) => link.link);
  const { pathname } = useLocation();

  return (
    <div className={styles.dropdown}>
      <div
        onClick={() => setVisible(!visible)}
        className={cn(styles.head, {
          [styles[color]]: dropdownLinks.includes(pathname.replace('/', '')),
        })}
      >
        <div className={styles.title_container}>
          {icon && <Icon name={icon} size={24} viewBox={iconViewBox} />}
          {title}
        </div>
        <Icon
          className={cn(styles.chevron, { [styles.active]: visible })}
          name="chevron-down"
          size={20}
        />
      </div>
      <div className={cn(styles.body, { [styles.visible]: visible })}>
        {items.map((item) => (
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              cn(styles.item, { [styles[`secondary_${color}`]]: isActive })
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
