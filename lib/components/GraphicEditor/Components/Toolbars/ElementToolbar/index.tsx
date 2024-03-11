import { useCanvasContext } from '../../../CanvasContext/useCanvasContext';
import useCanvasAsState from '../../../hooks/useCanvasAsState';
import { ColorSelector } from '../../ColorSelector';
import { BorderSliderSelector } from '../../SliderSelector/BorderSliderSelector';
import { OpacitySliderSelector } from '../../SliderSelector/OpacitySliderSelector';
import style from './style.module.sass';

export const ElementToolbar = () => {
  const canvasInstanceRef = useCanvasContext();
  if (!canvasInstanceRef.current) return <></>;
  const { _activeObject } = useCanvasAsState(canvasInstanceRef.current, 'after:render', [
    '_activeObject',
  ]);
  const borderEditable = _activeObject.type === 'rect' || _activeObject.type === 'circle';

  return (
    <div className={style.elementToolbar}>
      <ColorSelector valueToWatch="fill" section="element-color" object={_activeObject} />
      {borderEditable && <BorderSliderSelector activeObject={_activeObject} />}
      <OpacitySliderSelector activeObject={_activeObject} />
    </div>
  );
};
