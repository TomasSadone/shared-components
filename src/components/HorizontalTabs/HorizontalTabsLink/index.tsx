import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import style from './style.module.sass';

type extraProps = {
  children: string;
  to: string;
  design: 'primary' | 'gray' | 'underline' | 'underlineFilled' | 'white';
  notifications?: number;
};

export type Props = NavLinkProps & React.RefAttributes<HTMLAnchorElement> & extraProps;

const HorizontalTabsLink = ({ children, to, design, notifications, ...props }: Props) => (
  <NavLink
    className={({ isActive }) => `${style.link} ${style[design]} ${isActive && style.active}`}
    {...props}
    to={to}
  >
    {children}
    {notifications === 0 || notifications ? (
      <span className={style.notification}>{notifications}</span>
    ) : null}
  </NavLink>
);

export default HorizontalTabsLink;
