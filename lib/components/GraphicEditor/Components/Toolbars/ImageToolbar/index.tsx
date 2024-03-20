import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import useCanvasAsState from 'components/GraphicEditor/hooks/useCanvasAsState';
import { OpacitySliderSelector } from '../../SliderSelector/OpacitySliderSelector';
import { Icon } from '../../../../Icon';
import { BackgroundCard } from '../../../../Editor/BackgroundCard';
import style from './style.module.sass';
import { Tooltip } from '../../../../Tooltip';

export const ImageToolbar = () => {
  const canvasInstanceRef = useCanvasContext();

  if (!canvasInstanceRef.current) return <></>;
  const { _activeObject } = useCanvasAsState(canvasInstanceRef.current, 'after:render', [
    '_activeObject',
  ]);

  const rotateImage = (objectProperty: 'flipY' | 'flipX') => {
    _activeObject.set(objectProperty, !_activeObject[objectProperty]);
    canvasInstanceRef?.current?.renderAll();
  };

  return (
    <div className={style.container}>
      <Tooltip trigger="hover" hoverItem={<p>Capovogli</p>}>
        <BackgroundCard className={style.flipControls}>
          <button onClick={() => rotateImage('flipY')}>
            <Icon
              viewBox="0 0 24 24"
              size={24}
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              name="flipY"
            />{' '}
            Capovogli verticalmente
          </button>
          <button onClick={() => rotateImage('flipX')}>
            <Icon
              viewBox="0 0 24 24"
              size={24}
              fill="none"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              name="flipX"
            />{' '}
            Capovogli orizzontalmente
          </button>
        </BackgroundCard>
      </Tooltip>

      <OpacitySliderSelector activeObject={_activeObject} />
    </div>
  );
};
