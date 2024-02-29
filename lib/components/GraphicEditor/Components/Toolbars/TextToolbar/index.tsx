import { subscribeFunctionGenerator } from '../../../helpers/subscribeFunctionGenerator';
import { useCanvasContext } from '../../../CanvasContext/CanvasContext';
import useSyncCanvas from '../../../hooks/useSyncCanvas';

const TextToolbar = () => {
  // states: fontColor, fontFamiliy, fontSize, bold, underline, italic, linethrough, uppercase, opacity
  const canvasInstanceRef = useCanvasContext();
  const subscribe = subscribeFunctionGenerator(
    canvasInstanceRef.current as fabric.Canvas,
    'after:render',
  );

  if (!canvasInstanceRef.current) return <></>;

  const { _activeObject } = useSyncCanvas(
    subscribe,
    ['_activeObject'],
    canvasInstanceRef.current,
  ) as { _activeObject: fabric.IText };

  return (
    <div>
      <span>{_activeObject.fontSize}</span>
      <span>{_activeObject.fontFamily}</span>
      <span>{_activeObject.underline}</span>
    </div>
  );
};

export { TextToolbar };
