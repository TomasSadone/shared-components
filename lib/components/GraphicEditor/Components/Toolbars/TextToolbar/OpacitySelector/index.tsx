import { ChangeEvent, useState } from 'react';
import { Icon } from '../../../../../Icon';
import style from '../FontSizeHandler/otro.module.sass';
// import style from './style.module.sass';
import useCanvasAsState from '../../../../hooks/useCanvasAsState';
import { useCanvasContext } from '../../../../CanvasContext/useCanvasContext';
import { EventName } from 'fabric/fabric-impl';

type Props = {
  activeTextObject: fabric.IText;
  title: string;
};

const event: EventName = 'object:modified';

export const OpacitySelector = ({ activeTextObject, title }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const { opacity } = useCanvasAsState(activeTextObject, event, ['opacity']) as {
    opacity: number;
  };
  const canvasInstanceRef = useCanvasContext();
  const handleOpacityChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!canvasInstanceRef.current) return;
    const newOpacity = Number(e.target.value) / 100;
    activeTextObject.set('opacity', newOpacity);
    activeTextObject.fire(event);
    canvasInstanceRef.current.renderAll();
    const value =
      ((newOpacity - Number(e.target.min) / 100) / (Number(e.target.max) / 100)) * 100;
    e.target.style.setProperty('--value', value + '%');
  };
  return (
    <div
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      className={style.toggler}
      title={title}
    >
      <Icon size={16} fill="#667085" name="opacity" />
      {true && (
        <div className={style.sliderContainer}>
          <div className="">
            <span>Opacità</span>
            <div className="">{Math.round(opacity * 100)}%</div>
          </div>
          <div className="">
            <input
              type="range"
              id="volume"
              name="volume"
              min="0"
              max="100"
              step="1"
              value={opacity * 100}
              onChange={handleOpacityChange}
              //   style={{
              //     '--value': `${opacity * 100}%`,
              //   }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
