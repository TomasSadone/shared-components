import { useAtom } from 'jotai';
import { SidemenusSections, selectedSectionAtom } from '../../CanvasContext/atoms/atoms';
import { TextSidemenu } from './TextSidemenu';
import style from './style.module.sass';
import { ElementsSidemenu } from './ElementsSidemenu';
import { TextColorSM } from './ColorSideMenu/ObjectColorSM/TextColorSM';
import { ElementColorSM } from './ColorSideMenu/ObjectColorSM/ElementColorSM';
import { BorderColorSM } from './ColorSideMenu/ObjectColorSM/BorderColorSM';
import { LayersSubmenu } from './LayersSubmenu';
import { ImagesSidemenu, Props as ImageSidemenuProps } from './ImagesSidemenu';
import { CanvasColorSM } from './ColorSideMenu/CanvasColorSM';
import { UploadsSidemenu, Props as UploadSidemenuProps } from './UploadsSidemenu';

// TODO unificar o sidemenus o submenos, en un lado son de una manera y en otro de otra. ver base editor

type SubmenuProps = UploadSidemenuProps & ImageSidemenuProps;

type SubmenuComponent = React.FC<SubmenuProps>;

export const Sidemenu: React.FC<SubmenuProps> = (props) => {
  const [selectedSection] = useAtom(selectedSectionAtom);
  let CurrentSubmenu: React.FC;
  if (Sidemenus[selectedSection] !== undefined) {
    CurrentSubmenu = Sidemenus[selectedSection] as React.FC;
  } else {
    return <></>;
  }
  if (selectedSection === 'uploads' || selectedSection === 'images') {
    CurrentSubmenu.defaultProps = props;
  }
  return (
    <div className={style.sideMenus}>
      <CurrentSubmenu />
    </div>
  );
};

const Sidemenus: Partial<{ [key in SidemenusSections]: SubmenuComponent }> = {
  text: () => <TextSidemenu />,
  elements: () => <ElementsSidemenu />,
  images: ImagesSidemenu,
  layers: () => <LayersSubmenu />,
  uploads: UploadsSidemenu,
  'element-color': () => <ElementColorSM />,
  'border-color': () => <BorderColorSM />,
  'text-color': () => <TextColorSM />,
  'canvas-color': () => <CanvasColorSM />,
};
