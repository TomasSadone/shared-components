import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { fabric } from 'fabric';
import { useCanvasContext } from '../../CanvasContext/CanvasContext';
import style from './style.module.sass';
import { useOnOutsideClick } from '../../../../hooks/useOnOutsideClick';
import { selectedItemTypeAtom } from '../../CanvasContext/atoms/atoms';
import { useAtom } from 'jotai';

const Canvas = () => {
  const canvasDomRef = useRef<HTMLCanvasElement | null>(null);
  // this ref exists because fabric wraps our canvas in other elements,
  // and that creates unexpected behaviors with outsideclick if we pass it that ref:
  const libraryWrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasInstanceRef = useCanvasContext();
  const [selectedItemType, setSelectedItemType] = useAtom(selectedItemTypeAtom);

  window.addEventListener('click', () => console.log(selectedItemType));

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
      {selectedItemType}
      <div ref={libraryWrapperRef}>
        <canvas
          ref={canvasDomRef}
          className={`${style.canvas} ${selectedItemType === 'canvas' && style.active}`}
        />
      </div>
    </div>
  );
};

export { Canvas };
