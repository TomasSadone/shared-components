import { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { useCanvasContext } from '../../CanvasContext/CanvasContext';
import style from './style.module.sass';

const Canvas = () => {
  const canvasDomRef = useRef<HTMLCanvasElement | null>(null);
  const canvasInstanceRef = useCanvasContext();

  useEffect(() => {
    canvasInstanceRef.current = initCanvas();
  }, []);

  function initCanvas() {
    return new fabric.Canvas(canvasDomRef.current, {
      width: 600,
      height: 600,
      backgroundColor: 'white',
      preserveObjectStacking: true,
    });
  }
  return (
    <div className={style.canvasContainer}>
      <canvas ref={canvasDomRef} className={style.canvas} />
    </div>
  );
};

export { Canvas };
