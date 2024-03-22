import { useCanvasContext } from 'components/graphic-editor/canvas-context/useCanvasContext';
import { AppButton } from '../../../button';
import { IconButton } from '../../../icon-button';
import style from './style.module.sass';

export type SaveObject = {
  version: string;
  objects: Object[];
  toDataURL: fabric.Canvas['toDataURL'];
  width: number;
  height: number;
  background: string;
};

type Props = {
  onSave: (template: SaveObject) => void;
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

  const handleSave = () => {
    if (!canvasInstanceRef.current) return;
    const { current: canvas } = canvasInstanceRef;
    //if you are going to edit the passed array, please remember to adjust the type SaveObject
    const jsonUntyped = canvas.toJSON(['width', 'height', 'toDataURL', 'background']) as any;
    const json = jsonUntyped as SaveObject;
    json.toDataURL = json.toDataURL.bind(canvas);
    onSave(json);
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
          onClick={handleSave}
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
