import { Color } from '../../../Color';
import { SubscribableStore } from '../../hooks/useSubscribeFunctionGenerator';
import useCanvasAsState from '../../hooks/useCanvasAsState';
import { EventName } from 'fabric/fabric-impl';
import style from './style.module.sass';
import { useAtom } from 'jotai';
import { handleSetSelectedSectionAtom } from '../../CanvasContext/atoms/atoms';

type Props = {
  object: SubscribableStore;
};

export const ColorSelector = ({ object }: Props) => {
  const event: EventName = 'object:modified';
  const [, setSelectedSectionAtom] = useAtom(handleSetSelectedSectionAtom);
  const handleClick = () => {
    setSelectedSectionAtom('color');
  };
  const { fill } = useCanvasAsState(object, event, ['fill']) as { fill: string };
  return (
    <button className={style.color} onClick={handleClick}>
      <Color className={style.color} hexCode={fill} />
    </button>
  );
};
