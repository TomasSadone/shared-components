import { AppButton } from '../../../Button';
import { IconButton } from '../../../IconButton';
import style from './style.module.sass';

//si no undo y redo se pueden manejar aca, si es que ponemos el canvas global
type Props = {
  onSave: (template: JSON) => void;
  onExit: () => void;
  onUndo: () => void;
  onRedo: () => void;
};

export const ActionsBar = ({ onSave, onExit }: Props) => {
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
          iconProps={{ fill: '#344054', viewBox: '0 0 24 24', size: 24 }}
          icon="undo"
        />
        <IconButton
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
