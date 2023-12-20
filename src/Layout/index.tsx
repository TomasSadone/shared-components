import { Dropdown, MenuItem } from '../../';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { navBar } from 'constants/appNavLinks';
import { DropdownItem as DropdownItemType, MenuItem as MenuItemType } from 'types/MainTypes';

const Layout = () => {
  const renderNavBar = React.useCallback(() => {
    return (
      <div className="nav-bar-container">
        {navBar.map((item) => {
          if ((item as MenuItemType).link) return <MenuItem {...(item as MenuItemType)} />;
          else return <Dropdown {...(item as DropdownItemType)} />;
        })}
      </div>
    );
  }, []);

  return (
    <div className="d-flex">
      <div className="nav-bar-container">{renderNavBar()}</div>
      <div className="navigator-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
