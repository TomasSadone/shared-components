import { Icon } from '../../icon';
import { icons } from '../../../constants/svg-icons';
import React, { CSSProperties, useRef } from 'react';
import styles from './Dropdown.module.sass';
import cn from 'classnames';
import { SelectOptions } from '../../../types/main-types';
import { use-on-outside-click } from '../../../hooks/use-on-outside-click';

type DropdownProps = {
  icon?: keyof typeof icons;
  optionIcon?: keyof typeof icons;
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
  optionIcon,
  iconViewBox,
  items,
  dropDownId,
  selectedItem,
  setSelectedItem,
  placeHolder,
  containerStyle,
}) => {
  const [visible, setVisible] = React.useState(false);
  const dropDownRef = useRef(null);

  const handleSelect = (item: SelectOptions) => {
    setSelectedItem && setSelectedItem(item);
    setVisible(false);
  };

  //   use-on-outside-click(dropDownId, setVisible, visible);

  return (
    <div style={containerStyle} ref={dropDownRef} id={dropDownId} className={styles.dropdown}>
      <div onClick={() => setVisible(!visible)} className={styles.head}>
        <div className={styles.title_container}>
          {icon && <Icon name={icon} size={24} viewBox={iconViewBox} />}
          {selectedItem?.label || placeHolder}
        </div>
        <Icon
          className={cn(styles.chevron, { [styles.active]: visible })}
          name="chevron-down"
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
            {optionIcon && <Icon name={optionIcon} />}
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
