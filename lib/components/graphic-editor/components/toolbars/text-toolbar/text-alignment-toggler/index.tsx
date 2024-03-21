import style from './style.module.sass';
import { EventName } from 'fabric/fabric-impl';
import useCanvasAsState from '../../../../hooks/use-canvas-as-state';
import { useCanvasContext } from '../../../../canvas-context/useCanvasContext';
import { Icon } from '../../../../../icon';

type Position = 'left' | 'center' | 'right';

type Props = {
  activeTextObject: fabric.IText;
  title: string;
};

const event: EventName = 'object:modified';

export const TextAlignmentToggler = ({ activeTextObject, title }: Props) => {
  const canvasInstanceRef = useCanvasContext();
  const { textAlign } = useCanvasAsState(activeTextObject, event, ['textAlign']) as {
    textAlign: Position;
  };
  const changeAlignment = (newPosition: Position) => {
    if (!canvasInstanceRef.current) return;
    activeTextObject.set('textAlign', newPosition);
    activeTextObject.fire(event);
    canvasInstanceRef.current.renderAll();
  };
  const handleAlignmentStrategy = (position: Position) => {
    if (position === 'left') {
      changeAlignment('center');
    } else if (position === 'center') {
      changeAlignment('right');
    } else if (position === 'right') {
      changeAlignment('left');
    }
  };
  return (
    <button
      className={style.toggler}
      title={title}
      onClick={() => handleAlignmentStrategy(textAlign)}
    >
      <Icon
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#667085"
        size={22}
        name={`align-${textAlign}`}
      />
    </button>
  );
};
