import { useCanvasContext } from '../../../CanvasContext/useCanvasContext';
import useCanvasAsState from '../../../hooks/useCanvasAsState';
import { FontSizeHandler } from './FontSizeHandler';
import { TextAlignmentToggler } from './TextAlignmentToggler';
import { Toggler, TogglerArgs } from './Toggler';
import style from './style.module.sass';

import { FontFamilySelector } from './FontFamilySelector';
import { ColorSelector } from '../../ColorSelector';
import { handleSetSelectedItemTypeAtom } from '../../../CanvasContext/atoms/atoms';
import { useAtom } from 'jotai';
import { OpacitySliderSelector } from '../../SliderSelector/OpacitySliderSelector';

const TextToolbar = () => {
  const canvasInstanceRef = useCanvasContext();
  if (!canvasInstanceRef.current) return <div></div>;
  const [, setSelectedItemType] = useAtom(handleSetSelectedItemTypeAtom);

  const { _activeObject } = useCanvasAsState(canvasInstanceRef.current!, 'after:render', [
    '_activeObject',
  ]) as { _activeObject: fabric.IText };

  //   prevent error on section change
  if (!_activeObject) setSelectedItemType('');

  const onToggle = ({ event, key, value }: TogglerArgs) => {
    _activeObject.set(key, value);
    _activeObject.fire(event);
    canvasInstanceRef.current!.renderAll();
  };

  const onBoldToggle = (args: TogglerArgs) => {
    onStringToggle(args, 'bold');
  };
  const onStyleToggle = (args: TogglerArgs) => {
    onStringToggle(args, 'italic');
  };
  const onStringToggle = (args: TogglerArgs, notNormalValue: 'italic' | 'bold') => {
    if (args.value === 'normal') {
      onToggle({ ...args, value: notNormalValue });
    } else if (args.value === notNormalValue) {
      onToggle({ ...args, value: 'normal' });
    }
  };
  const onBooleanToggle = (args: TogglerArgs) => {
    onToggle({ ...args, value: !args.value });
  };

  const handleUppercaseToggle = (args: TogglerArgs) => {
    (_activeObject as any).isUppercase = !args.value;
    const setUppercase = () => {
      if (args.value) {
        return _activeObject.text?.toLowerCase();
      } else {
        return _activeObject.text?.toUpperCase();
      }
    };
    _activeObject.text = setUppercase();
    _activeObject.dirty = true;
    _activeObject.fire('object:modified');
    if (canvasInstanceRef.current) {
      canvasInstanceRef.current.renderAll();
    }
  };
  const isUpperCase = 'isUppercase' as keyof fabric.IText;

  return (
    <div className={style.textToolbar}>
      <ColorSelector section="text-color" valueToWatch="fill" object={_activeObject} />
      <FontFamilySelector activeTextObject={_activeObject}></FontFamilySelector>
      <FontSizeHandler activeTextObject={_activeObject} />
      <div className={style.groupedButtons}>
        <Toggler
          iconProps={{ name: 'bold', size: 16, viewBox: '0 0 11 14', fill: '#667085' }}
          activeTextObject={_activeObject}
          onToggle={onBoldToggle}
          valueToWatch="fontWeight"
          title="font weight"
        />
        <Toggler
          iconProps={{ name: 'italic', size: 16, viewBox: '0 0 12 14', fill: '#667085' }}
          activeTextObject={_activeObject}
          onToggle={onStyleToggle}
          valueToWatch="fontStyle"
          title="font style"
        />
        <Toggler
          iconProps={{ name: 'underline', size: 16, viewBox: '0 0 14 14', fill: '#667085' }}
          activeTextObject={_activeObject}
          onToggle={onBooleanToggle}
          valueToWatch="underline"
          title="underline"
        />
        <Toggler
          iconProps={{ name: 'linethrough', size: 16, viewBox: '0 0 12 16', fill: '#667085' }}
          activeTextObject={_activeObject}
          onToggle={onBooleanToggle}
          valueToWatch="linethrough"
          title="line through"
        />
        <Toggler
          iconProps={{ name: 'match-case', size: 24, viewBox: '0 0 24 24', fill: '#667085' }}
          activeTextObject={_activeObject}
          onToggle={handleUppercaseToggle}
          valueToWatch={isUpperCase}
          title="uppercase"
        />
        <TextAlignmentToggler title="text alignment" activeTextObject={_activeObject} />
        <OpacitySliderSelector activeObject={_activeObject} />
      </div>
    </div>
  );
};

export { TextToolbar };
