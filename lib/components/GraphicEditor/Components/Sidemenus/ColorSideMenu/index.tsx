import useCanvasAsState from '../../../hooks/useCanvasAsState';
import { useCanvasContext } from '../../../CanvasContext/useCanvasContext';
import { ColorPicker } from '../../../../Editor/ColorPicker';
import { useAtom } from 'jotai';
import {
  handleSetSelectedSectionAtom,
  selectedItemTypeAtom,
} from '../../../CanvasContext/atoms/atoms';
import { Tooltip } from '../../../../Tooltip';
import addcolor from './assets/addcolor.svg';
import style from './style.module.sass';
import { Color } from '../../../../Color';

type Props = {
  perIl: string;
};

const colorPallette = [
  '#000000',
  '#686868',
  '#9a9a9a',
  '#d3d3d3',
  '#ffffff',
  '#d69253',
  '#fb9333',
  '#ffd382',
  '#fff4e0',
  '#ffe3e2',
  '#45342b',
  '#86291d',
  '#9d4c32',
  '#cf5542',
  '#ce8786',
  '#003447',
  '#2580bb',
  '#74b9f2',
  '#68cf64',
  '#368b70',
];

export const ColorSideMenu = () => {
  const canvasInstanceRef = useCanvasContext();
  const [, setSelectedSection] = useAtom(handleSetSelectedSectionAtom);
  const [itemType] = useAtom(selectedItemTypeAtom);
  if (itemType === '')
    if (!canvasInstanceRef.current) {
      return <></>;
    }

  const { _activeObject } = useCanvasAsState(canvasInstanceRef.current!, 'after:render', [
    '_activeObject',
  ]);

  //   prevent error on section change
  if (!_activeObject) setSelectedSection('');

  const { fill } = useCanvasAsState(_activeObject, 'object:modified', ['fill']);

  const handleClick = (color: string) => {
    _activeObject.set('fill', color);
    _activeObject.fire('object:modified');
    canvasInstanceRef.current?.renderAll();
  };

  const color = fill || '#000';

  return (
    <div className={style.colorSideMenu}>
      <div className={style.section}>
        <p className={style.text}>Imposta un colore per il testo</p>
        <Tooltip trigger="click" hoverItem={<img src={addcolor} />}>
          <ColorPicker
            color={color}
            onChange={handleClick}
            onEyeDropError={() => handleClick('#000')}
          />
        </Tooltip>
      </div>
      <div className={style.section}>
        <p className={style.text}>Colori predefiniti</p>
        <div className={style.colors}>
          {colorPallette.map((color) => {
            return (
              <button
                className={style.predefinedColorInteractable}
                onClick={() => handleClick(color)}
              >
                <Color hexCode={color} key={color} className={style.predefinedColor} />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
