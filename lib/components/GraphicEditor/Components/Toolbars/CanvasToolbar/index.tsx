import { useCanvasContext } from '../../../CanvasContext/useCanvasContext';
import { ColorSelector } from '../../ColorSelector';

export const CanvasToolbar = () => {
  const canvasInstanceRef = useCanvasContext();
  if (!canvasInstanceRef.current) return <></>;

  return (
    <div>
      <ColorSelector
        border
        valueToWatch="backgroundColor"
        section="canvas-color"
        object={canvasInstanceRef.current}
      />
    </div>
  );
};
