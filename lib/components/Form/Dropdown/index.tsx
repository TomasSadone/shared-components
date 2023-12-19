import { Icon } from '../../Icon';
import { icons } from '../../../constants/svgIcons';
import React, { CSSProperties } from 'react';
import styles from './Dropdown.module.sass';
import cn from 'classnames';
import { SelectOptions } from '../../../types/MainTypes';
import { useOnOutsideClick } from '../../../hooks/useOnOutsideClick';

type DropdownProps = {
  icon?: keyof typeof icons;
  iconViewBox?: string;
  dropDownId: string;
  placeHolder?: string;
  items: SelectOptions[];
  selectedItem?: SelectOptions;
  setSelectedItem?: (item: SelectOptions) => void;
  containerStyle?: CSSProperties;
};

export const Dropdown: React.FC<DropdownProps> = ({
  icon,
  iconViewBox,
  items,
  dropDownId,
  selectedItem,
  setSelectedItem,
  placeHolder,
  containerStyle,
}) => {
  const [visible, setVisible] = React.useState(false);

  const handleSelect = (item: SelectOptions) => {
    setSelectedItem && setSelectedItem(item);
    setVisible(false);
  };

  useOnOutsideClick(dropDownId, setVisible, visible);

  return (
    <div style={containerStyle} id={dropDownId} className={styles.dropdown}>
      <div onClick={() => setVisible(!visible)} className={styles.head}>
        <div className={styles.title_container}>
          {icon && <Icon name={icon} size={24} viewBox={iconViewBox} />}
          {selectedItem?.label || placeHolder}
        </div>
        <Icon
          className={cn(styles.chevron, { [styles.active]: visible })}
          name="chevron"
          size={20}
        />
      </div>
      <div className={cn(styles.body, { [styles.visible]: visible })}>
        {items.map((item) => (
          <div
            onClick={() => handleSelect(item)}
            className={cn(styles.item, {
              [styles.active]: item.value === selectedItem?.value,
            })}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
