import useCanvasAsState from '../../../hooks/useCanvasAsState';
import { useCanvasContext } from '../../../CanvasContext/useCanvasContext';

export const ColorSideMenu = () => {
  const canvasInstanceRef = useCanvasContext();

  if (!canvasInstanceRef.current) {
    return <></>;
  }

  const { _activeObject } = useCanvasAsState(canvasInstanceRef.current!, 'after:render', [
    '_activeObject',
  ]);

  const handleClick = () => {
    _activeObject.set('fill', '#fb9333');
    _activeObject.fire('object:modified');
    canvasInstanceRef.current?.renderAll();
  };

  return <div onClick={handleClick}>ColorSideMenu.index</div>;
};
