import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import { ColorSideMenu } from '..';
import useCanvasAsState from 'components/GraphicEditor/hooks/useCanvasAsState';

export const CanvasColorSM = () => {
  const canvasInstanceRef = useCanvasContext();
  if (!canvasInstanceRef.current) return <></>;

  const { backgroundColor } = useCanvasAsState(canvasInstanceRef.current, 'after:render', [
    'backgroundColor',
  ]);

  const onChange = (color: string) => {
    canvasInstanceRef.current?.setBackgroundColor(color, () =>
      canvasInstanceRef.current?.requestRenderAll(),
    );
  };

  const color = backgroundColor || '#fff';

  return (
    <ColorSideMenu
      title="Imposta un colore come sfondo"
      color={color as string}
      handleColorChange={onChange}
    />
  );
};
