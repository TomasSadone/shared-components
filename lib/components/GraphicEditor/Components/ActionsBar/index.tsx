import { useCanvasContext } from 'components/GraphicEditor/CanvasContext/useCanvasContext';
import { AppButton } from '../../../Button';
import { IconButton } from '../../../IconButton';
import style from './style.module.sass';

type Props = {
  onSave: (template: JSON) => void;
  onExit: () => void;
};

export const ActionsBar = ({ onSave, onExit }: Props) => {
  const canvasInstanceRef = useCanvasContext();
  const undo = () => {
    if (!canvasInstanceRef.current) return;
    (canvasInstanceRef.current as { undo: Function } & fabric.Canvas).undo();
  };
  const redo = () => {
    if (!canvasInstanceRef.current) return;
    (canvasInstanceRef.current as { redo: Function } & fabric.Canvas).redo();
  };
  return (
    <div className={style.actionsBar}>
      <AppButton
        onClick={onExit}
        icon="chevron-left"
        color="white"
        title="Esci"
        iconProps={{
          size: 24,
          stroke: '#344054',
          strokeWidth: '2',
          viewBox: '0 0 24 24',
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
      />
      <div className={style.subGroup}>
        <IconButton
          onClick={undo}
          iconProps={{ fill: '#344054', viewBox: '0 0 24 24', size: 24 }}
          icon="undo"
        />
        <IconButton
          onClick={redo}
          iconProps={{ fill: '#344054', viewBox: '0 0 24 24', size: 24 }}
          icon="redo"
        />
        <AppButton
          onClick={onExit}
          icon="check"
          iconProps={{
            fill: 'none',
            stroke: 'white',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            size: 24,
            viewBox: ' 0 0 20 20',
          }}
          color="green"
          title="Salva"
        />
      </div>
    </div>
  );
};
