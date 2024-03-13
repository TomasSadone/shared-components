import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import { ColorSideMenu } from '../..';
import useCanvasAsState from 'components/GraphicEditor/hooks/useCanvasAsState';
import { ObjectColorSM } from '..';

export const TextColorSM = () => {
  const canvasInstanceRef = useCanvasContext();
  const { _activeObject } = useCanvasAsState(canvasInstanceRef.current!, 'after:render', [
    '_activeObject',
  ]);

  const valueToWatch = 'fill';

  const onChange = (color: string) => {
    _activeObject.set(valueToWatch, color);
  };

  return (
    <ObjectColorSM
      title="Imposta un colore per il testo"
      handleColorChange={onChange}
      valueToWatch={valueToWatch}
    />
  );
};
