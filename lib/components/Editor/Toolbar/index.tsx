import { AppButton } from '../../Button';
import { IconButton } from '../../IconButton';
import style from './style.module.sass';

type Props = {
  handleExit: () => void;
  handleUndo: () => void;
  handleRedo: () => void;
  handleSave: () => void;
  exitText: string;
  saveText: string;
  undoDisabled?: boolean;
  redoDisabled?: boolean;
};

export const Toolbar = ({
  exitText,
  saveText,
  handleExit,
  handleSave,
  handleRedo,
  handleUndo,
  undoDisabled,
  redoDisabled,
}: Props) => (
  <div className={style.toolbar}>
    <AppButton color="blue" stroke title={exitText} onClick={handleExit}></AppButton>
    <div className={style.controls}>
      <IconButton
        onClick={handleUndo}
        disabled={undoDisabled}
        icon="undo"
        iconProps={{
          viewBox: '0 0 21 20',
          fill: `${!undoDisabled ? '#344054' : '#D0D5DD'}`,
        }}
      />
      <IconButton
        onClick={handleRedo}
        disabled={redoDisabled}
        icon="redo"
        iconProps={{
          viewBox: '0 0 24 24',
          fill: `${!redoDisabled ? '#344054' : '#D0D5DD'}`,
        }}
      />
      <AppButton icon="add" color="green" title={saveText} onClick={handleSave}></AppButton>
    </div>
  </div>
);
