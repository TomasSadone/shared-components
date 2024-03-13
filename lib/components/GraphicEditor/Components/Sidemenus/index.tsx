import { useAtom } from 'jotai';
import { SidemenusSections, selectedSectionAtom } from '../../CanvasContext/atoms/atoms';
import { TextSidemenu } from './TextSidemenu';
import style from './style.module.sass';
import { ElementsSidemenu } from './ElementsSidemenu';
import { TextColorSM } from './ColorSideMenu/ObjectColorSM/TextColorSM';
import { ElementColorSM } from './ColorSideMenu/ObjectColorSM/ElementColorSM';
import { BorderColorSM } from './ColorSideMenu/ObjectColorSM/BorderColorSM';
import { LayersSubmenu } from './LayersSubmenu';
import { ImagesSidemenu } from './ImagesSidemenu';
import { CanvasColorSM } from './ColorSideMenu/CanvasColorSM';

// TODO unificar o sidemenus o submenos, en un lado son de una manera y en otro de otra. ver base editor

export const Sidemenu = () => {
  const [selectedSection] = useAtom(selectedSectionAtom);
  let CurrentSubmenu: React.FC;
  if (Submenus[selectedSection] !== undefined) {
    CurrentSubmenu = Submenus[selectedSection] as React.FC;
  } else {
    return <></>;
  }
  return (
    <div className={style.sideMenus}>
      <CurrentSubmenu />
    </div>
  );
};

const Submenus: Partial<{ [key in SidemenusSections]: React.FC }> = {
  text: () => <TextSidemenu />,
  elements: () => <ElementsSidemenu />,
  images: () => <ImagesSidemenu />,
  layers: () => <LayersSubmenu />,
  uploads: () => <>uploads</>,
  'element-color': () => <ElementColorSM />,
  'border-color': () => <BorderColorSM />,
  'text-color': () => <TextColorSM />,
  'canvas-color': () => <CanvasColorSM />,
};
