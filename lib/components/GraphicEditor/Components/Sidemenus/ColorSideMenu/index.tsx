import useCanvasAsState from '../../../hooks/useCanvasAsState';
import { useCanvasContext } from '../../../CanvasContext/useCanvasContext';

const colorPallette = [
  '#000000',
  '#686868',
  '#9a9a9a',
  '#d3d3d3',
  '#ffffff',
  '#d69253',
  '#fb9333',
  '#ffd382',
  '#fff4e0',
  '#ffe3e2',
  '#45342b',
  '#86291d',
  '#9d4c32',
  '#cf5542',
  '#ce8786',
  '#003447',
  '#2580bb',
  '#74b9f2',
  '#68cf64',
  '#368b70',
];

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
