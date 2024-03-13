import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import useCanvasAsState from 'components/GraphicEditor/hooks/useCanvasAsState';
import { ObjectColorSM } from '..';

export const BorderColorSM = () => {
  const canvasInstanceRef = useCanvasContext();
  const { _activeObject } = useCanvasAsState(canvasInstanceRef.current!, 'after:render', [
    '_activeObject',
  ]);

  const valueToWatch = 'stroke';

  const onChange = (color: string) => {
    _activeObject.set(valueToWatch, color);
    _activeObject.fire('object:modified');
    canvasInstanceRef.current?.renderAll();
  };

  return (
    <ObjectColorSM
      title="Imposta un colore per il bordo"
      handleColorChange={onChange}
      valueToWatch={valueToWatch}
    />
  );
};
