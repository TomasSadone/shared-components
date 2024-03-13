import { forwardRef, useEffect } from 'react';
import { fabric } from 'fabric';
import { useAtom } from 'jotai';
import { Editor } from '../Editor/BaseEditor';
import { Canvas } from './Components/Canvas';
import { ActionsBar } from './Components/ActionsBar';
import { Sidebar } from './Components/Sidebar';
import { Toolbar } from './Components/Toolbars';
import { useCanvasContext } from './CanvasContext/useCanvasContext';
import {
  ToolbarsSections,
  handleSetSelectedItemTypeAtom,
  handleSetSelectedSectionAtom,
  handleSetThreePointsMenuPosition,
} from './CanvasContext/atoms/atoms';
import { Sidemenu } from './Components/Sidemenus';
import { elementSectionTypes } from './constants/elementSectionTypes';

export type Props = {
  onSave: (template: JSON) => void;
  onExit: () => void;
};

fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = '#00b27a';
fabric.Object.prototype.cornerStyle = 'circle';

if (document) {
  document.head.innerHTML += `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Amatic+SC:wght@400;700&family=Arimo:ital,wght@0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Bebas+Neue&family=Caveat+Brush&family=Dancing+Script:wght@400;500;600;700&family=Itim&family=Londrina+Shadow&family=Pacifico&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Signika:wght@300;400;500;600;700&family=Tenor+Sans&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
    `;
}

export const GraphicEditor = forwardRef(({ onSave, onExit }: Props, ref) => {
  const canvasInstanceRef = useCanvasContext();
  const [, setSelectedSection] = useAtom(handleSetSelectedSectionAtom);
  const [, setSelectedItemType] = useAtom(handleSetSelectedItemTypeAtom);
  const setSectionAndItemType = (section: Exclude<ToolbarsSections, 'canvas'>) => {
    setSelectedSection(section);
    setSelectedItemType(section);
  };
  const [, setPositionThreePointsMenu] = useAtom(handleSetThreePointsMenuPosition);

  useEffect(() => {
    if (canvasInstanceRef.current) {
      canvasInstanceRef.current.on('mouse:down', handleMouseDown);
      canvasInstanceRef.current.on('selection:cleared', handleSectionCleared);
      canvasInstanceRef.current.on('selection:created', handleSelection);
      canvasInstanceRef.current.on('selection:updated', handleSelection);
      canvasInstanceRef.current.on('object:modified', handleSelection);
      return () => {
        canvasInstanceRef.current?.dispose();
      };
    }
  }, []);

  function handleMouseDown(e: fabric.IEvent<Event>) {
    if (!e.target || !e.target?.type) {
      setSelectedSection('');
      setSelectedItemType('canvas');
      return;
    }
    const { type } = e.target;
    if (type === 'i-text') {
      setSectionAndItemType('text');
    } else if (elementSectionTypes.includes(type)) {
      setSectionAndItemType('elements');
    }
  }

  function handleSectionCleared() {
    setPositionThreePointsMenu(null);
    setSelectedItemType('');
  }

  function handleSelection() {
    setPositionThreePointsMenu(null);
  }

  return (
    <Editor
      ActionsBarChildren={<ActionsBar onExit={() => null} onSave={() => null} />}
      Sidebar={<Sidebar />}
      SidemenuChildren={<Sidemenu />}
      ToolsBarChildren={<Toolbar />}
    >
      <Canvas />
    </Editor>
  );
});
