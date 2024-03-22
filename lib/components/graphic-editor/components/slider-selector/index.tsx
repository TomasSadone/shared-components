import { useState } from 'react';
import { Icon } from '../../../icon';
import style from './style.module.sass';
import useCanvasAsState from '../../hooks/use-canvas-as-state';
import { useCanvasContext } from '../../canvas-context/useCanvasContext';
import { EventName } from 'fabric/fabric-impl';
import { icons } from 'constants/svg-icons';
import { SliderInput, Props as SliderProps } from '../../../form/slider-input';
import { BackgroundCard } from 'components/editor/background-card';
import { Tooltip } from '../../../tooltip';

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
  const handleToggle = () => {
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
      //   onMouseEnter={handleToggle}
      //   onMouseLeave={handleToggle}
      className={style.toggler}
      title={title}
    >
      <Tooltip trigger="hover" hoverItem={<Icon size={17} fill="#667085" name={icon} />}>
        <BackgroundCard>
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
      </Tooltip>
    </div>
  );
};
