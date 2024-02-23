import { AppButton } from '../../Button';
import { IconButton } from '../../IconButton';
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
        color="blue"
        title="Esci"
        iconProps={{
          stroke: '#000',
          strokeWidth: '2',
          viewBox: '0 0 20 20',
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }}
      />
      <div>
        <IconButton icon="undo" />
        <IconButton icon="redo" />
        <AppButton onClick={onExit} icon="chevron-left" color="blue" title="Esci" />
      </div>
    </div>
  );
};
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M15 18L9 12L15 6"
    stroke="#344054"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>;
