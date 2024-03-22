import { useCanvasContext } from 'components/graphic-editor/canvas-context/useCanvasContext';
import useCanvasAsState from 'components/graphic-editor/hooks/use-canvas-as-state';
import { OpacitySliderSelector } from '../../slider-selector/opacity-slider-selector';
import { Icon } from '../../../../icon';
import { BackgroundCard } from '../../../../editor/background-card';
import style from './style.module.sass';
import { Tooltip } from '../../../../tooltip';

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
