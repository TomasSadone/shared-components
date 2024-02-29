import {
  ToolbarsSections,
  selectedItemTypeAtom,
  useSectionsStore,
} from '../../CanvasContext/atoms/atoms';
import { TextToolbar } from './TextToolbar';

export const Toolbar = () => {
  const selectedItemType = useSectionsStore((store) => store.selectedItemType);

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
  elements: () => <>elements</>,
};
