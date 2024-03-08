import { useState } from 'react';
import { Icon } from '../../../Icon';
import style from './style.module.sass';
import useCanvasAsState from '../../hooks/useCanvasAsState';
import { useCanvasContext } from '../../CanvasContext/useCanvasContext';
import { EventName } from 'fabric/fabric-impl';
import { icons } from 'constants/svgIcons';
import { SliderInput, Props as SliderProps } from '../../../Form/SliderInput';
import { BackgroundCard } from 'components/Editor/BackgroundCard';
import { ColorSelector } from '../ColorSelector';

type Props = {
  activeObject: fabric.Object;
  title: string;
  icon: keyof typeof icons;
  valueToWatch: 'opacity' | 'strokeWidth';
  sliderProps: Omit<SliderProps, 'value' | 'onChange'>;
  valueUnit: string;
  multiplier: number;
  childrenAbove?: React.ReactNode | React.ReactNode[];
  childrenBelow?: React.ReactNode | React.ReactNode[];
};

const event: EventName = 'object:modified';

export const SliderSelector = ({
  activeObject,
  title,
  icon,
  valueToWatch,
  multiplier,
  valueUnit,
  sliderProps,
  childrenAbove,
  childrenBelow,
}: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const value = useCanvasAsState(activeObject, event, [valueToWatch]) as Record<
    string,
    number
  >;
  const canvasInstanceRef = useCanvasContext();
  const handleSliderChange = (value: number) => {
    if (!canvasInstanceRef.current) return;
    activeObject.set(valueToWatch, value);
    activeObject.fire(event);
    canvasInstanceRef.current.renderAll();
  };
  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      className={style.toggler}
      title={title}
    >
      <Icon size={17} fill="#667085" name={icon} />
      {open && (
        <BackgroundCard className={style.sliderContainer}>
          {childrenAbove}

          <div className={style.slider}>
            <span>{title}</span>
            <div className={style.sliderLabel}>
              {Math.round(value[valueToWatch] * multiplier)}
              {valueUnit}
            </div>
          </div>
          <SliderInput
            {...sliderProps}
            value={value[valueToWatch]}
            onChange={handleSliderChange}
          />
          {childrenBelow}
        </BackgroundCard>
      )}
    </div>
  );
};
