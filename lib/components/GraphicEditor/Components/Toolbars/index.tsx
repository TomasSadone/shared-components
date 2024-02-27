import { useAtom } from 'jotai';
import { Sections, selectedItemTypeAtom } from '../../CanvasContext/atoms/atoms';
import { TextToolbar } from './TextToolbar';

export const Toolbar = () => {
  const [selectedSection] = useAtom(selectedItemTypeAtom);
  let CurrentToolbar: React.FC;
  if (Toolbars[selectedSection] !== undefined) {
    CurrentToolbar = Toolbars[selectedSection] as React.FC;
  } else {
    return <></>;
  }
  return <CurrentToolbar />;
};

// TODO remove partial
const Toolbars: Partial<{ [key in Sections]: React.FC }> = {
  text: TextToolbar,
  canvas: () => <>canvas</>,
  elements: () => <>elements</>,
  images: () => <>images</>,
  layers: () => <>layers</>,
  uploads: () => <>uploads</>,
};

Toolbar.text = TextToolbar;
