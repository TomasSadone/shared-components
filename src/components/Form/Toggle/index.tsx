import style from './style.module.sass';

type Props = {
  selected: boolean;
  onClick: () => void;
};

const Toggle = ({ selected, onClick }: Props) => (
  <button onClick={onClick} className={`${style.toggle} ${selected && style.selected}`} />
);

export default Toggle;
