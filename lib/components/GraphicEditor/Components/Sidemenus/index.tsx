import { useAtom } from 'jotai';
import { SidemenusSections, selectedSectionAtom } from '../../CanvasContext/atoms/atoms';
import { TextSidemenu } from './TextSidemenu';
import style from './style.module.sass';
import { ElementsSidemenu } from './ElementsSidemenu';
import { TextColorSM } from './ColorSideMenu/TextColorSM';
import { ElementColorSM } from './ColorSideMenu/ElementColorSM';
import { BorderColorSM } from './ColorSideMenu/BorderColorSM';
import { LayersSubmenu } from './LayersSubmenu';

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
  images: () => <>images</>,
  layers: () => <LayersSubmenu />,
  uploads: () => <>uploads</>,
  'element-color': () => <ElementColorSM />,
  'border-color': () => <BorderColorSM />,
  'text-color': () => <TextColorSM />,
};
