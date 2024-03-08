import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import { ColorSideMenu } from '..';
import useCanvasAsState from 'components/GraphicEditor/hooks/useCanvasAsState';

export const TextColorSM = () => {
  const canvasInstanceRef = useCanvasContext();
  const { _activeObject } = useCanvasAsState(canvasInstanceRef.current!, 'after:render', [
    '_activeObject',
  ]);

  const valueToWatch = 'fill';

  const onChange = (color: string) => {
    _activeObject.set(valueToWatch, color);
  };

  return <ColorSideMenu handleColorChange={onChange} valueToWatch={valueToWatch} />;
};
