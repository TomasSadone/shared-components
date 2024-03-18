import { SliderInput } from 'components/Form/SliderInput';
import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import { useMemo, useState } from 'react';
import style from './style.module.sass';

export const Resizer = () => {
  const canvasInstanceRef = useCanvasContext();
  const [zoom, setZoom] = useState(1);
  const initialSize = useMemo(() => {
    if (canvasInstanceRef.current) {
      return {
        width: canvasInstanceRef.current.getWidth(),
        height: canvasInstanceRef.current.getHeight(),
      };
    } else {
      return {
        width: 500,
        height: 500,
      };
    }
  }, [canvasInstanceRef]);

  const handleSliderChange = (value: number) => {
    if (!canvasInstanceRef.current) return;
    const { current: canvas } = canvasInstanceRef;
    setDimentions(value, canvas);
  };

  const setDimentions = (zoom: number, canvas: fabric.Canvas): void => {
    if (!canvasInstanceRef.current) return;
    canvas.setZoom(zoom);
    canvas.setHeight(initialSize.height * zoom);
    canvas.setWidth(initialSize.width * zoom);
    setZoom(zoom);
  };

  return (
    <div className={style.container}>
      <div className={style.group}>
        <SliderInput
          onChange={handleSliderChange}
          maxValue={5}
          minValue={0.1}
          step={0.01}
          title="size"
          value={zoom}
        />
        <span>{`${Math.round(zoom * 100)}%`}</span>
      </div>
    </div>
  );
};
