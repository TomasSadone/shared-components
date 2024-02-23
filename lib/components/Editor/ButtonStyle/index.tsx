import { BackgroundCard } from '../BackgroundCard';
import style from './style.module.sass';
type Shapes = 'squared' | 'rounded' | 'circle' | null;
type Props = {
  onSelect: (shape: Shapes) => void;
  selected: Shapes;
};

export const ButtonStyle = ({ onSelect, selected }: Props) => {

  return (
    <BackgroundCard className={style.card} padding={0}>
      <button
        onClick={() => onSelect('squared')}
        className={`${selected === 'squared' ? style.selected : ''} ${style.button}`}
      >
        <div className={`${style.shape} ${style.squared}`}></div>
      </button>
      <button
        onClick={() => onSelect('rounded')}
        className={`${selected === 'rounded' ? style.selected : ''} ${style.button}`}
      >
        <div className={`${style.shape} ${style.rounded}`}></div>
      </button>
      <button
        onClick={() => onSelect('circle')}
        className={`${selected === 'circle' ? style.selected : ''} ${style.button}`}
      >
        <div className={`${style.shape} ${style.circle}`}></div>
      </button>
    </BackgroundCard>
  );
};
