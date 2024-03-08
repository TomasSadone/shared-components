import { useAtom } from 'jotai';
import { ToolbarsSections, selectedItemTypeAtom } from '../../CanvasContext/atoms/atoms';
import { TextToolbar } from './TextToolbar';
import { ElementToolbar } from './ElementToolbar';

export const Toolbar = () => {
  const [selectedItemType] = useAtom(selectedItemTypeAtom);
  let CurrentToolbar: React.FC;
  if (Toolbars[selectedItemType] !== undefined) {
    CurrentToolbar = Toolbars[selectedItemType] as React.FC;
  } else {
    return <></>;
  }
  return <CurrentToolbar />;
};

const Toolbars: Partial<{ [key in ToolbarsSections]: React.FC }> = {
  text: TextToolbar,
  canvas: () => <>canvas</>,
  elements: ElementToolbar,
};
