import style from './style.module.sass';
import { Icon, IconProps } from '../../../../../Icon';
import useCanvasAsState from '../../../../hooks/useCanvasAsState';
import { useState } from 'react';

export type TogglerArgs = {
  key: keyof fabric.IText;
  value: string | boolean;
  event: fabric.EventName;
};

type Props = {
  iconProps: Omit<IconProps, 'onClick'>;
  activeTextObject: fabric.IText;
  pertinentValue: keyof fabric.IText;
  onToggle: (args: TogglerArgs) => void;
  title?: string;
};

export const Toggler = ({
  pertinentValue,
  activeTextObject,
  onToggle,
  iconProps,
  title,
}: Props) => {
  const [selected, setSelected] = useState(false);
  const value = useCanvasAsState(activeTextObject, 'object:modified', [pertinentValue]);
  const isSelected = (value: string | boolean) => {
    if (typeof value === 'string') {
      return value !== 'normal';
    }
    return value;
  };
  const handleClick = () => {
    setSelected(!selected);
    onToggle({
      event: 'object:modified',
      key: pertinentValue,
      value: value[pertinentValue],
    });
  };
  return (
    <button
      title={title}
      onClick={handleClick}
      className={`${style.toggler} ${isSelected(value?.[pertinentValue]) && style.selected}`}
    >
      <Icon {...iconProps} />
    </button>
  );
};
