import { useAtom } from 'jotai';
import { SidemenusSections, selectedSectionAtom } from '../../CanvasContext/atoms/atoms';
import { TextSubmenu } from './TextSidemenu';
import { ColorSideMenu } from './ColorSideMenu';

// TODO unificar o sidemenus o submenos, en un lado son de una manera y en otro de otra. ver base editor

export const Sidemenu = () => {
  const [selectedSection] = useAtom(selectedSectionAtom);
  let CurrentSubmenu: React.FC;
  if (Submenus[selectedSection] !== undefined) {
    CurrentSubmenu = Submenus[selectedSection] as React.FC;
  } else {
    return <></>;
  }
  return <CurrentSubmenu />;
};

const Submenus: Partial<{ [key in SidemenusSections]: React.FC }> = {
  text: () => <TextSubmenu />,
  elements: () => <>elements</>,
  images: () => <>images</>,
  layers: () => <>layers</>,
  uploads: () => <>uploads</>,
  color: () => <ColorSideMenu />,
};
