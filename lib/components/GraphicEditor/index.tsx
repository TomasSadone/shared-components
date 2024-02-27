import { forwardRef, useEffect } from 'react';
import { Editor } from '../Editor/BaseEditor';
import { ActionsBar } from './Components/ActionsBar';
import { BackgroundCard } from '../Editor/BackgroundCard';
import { fabric } from 'fabric';
import { useCanvasContext } from './CanvasContext/CanvasContext';
import { Canvas } from './Components/Canvas';
import { useAtom } from 'jotai';
import {
  handleSetSelectedItemTypeAtom,
  handleSetSelectedSectionAtom,
} from './CanvasContext/atoms/atoms';
import { Sidebar } from './Components/Sidebar';
import { Toolbar } from './Components/Toolbars';

export type Props = {
  onSave: (template: JSON) => void;
  onExit: () => void;
};

/*
Cuando vaya a hacer el <sidebar[section] o toolsbar, ver https://stackoverflow.com/questions/58780817/using-optional-chaining-operator-for-object-property-access
para hacerlo con el estado sin tener que checkear condiciones
porque si canvas esta seleccionado, no hay section y si navbar,
y si luego hay otras sections que no afectan e canvas, no habria navbar calculo
*/

//puede cambiar a ser los tipos como te los dice el canvas para que sea mas simple. ej "i-text"
type Sections = '' | 'images' | 'text' | 'elements' | 'layers' | 'uploads' | 'canvas';
const elementSectionTypes = ['rect', 'circle', 'group', 'path'];

export const GraphicEditor = forwardRef(({ onSave, onExit }: Props, ref) => {
  const [, setSelectedSection] = useAtom(handleSetSelectedSectionAtom);
  const [, setSelectedItemType] = useAtom(handleSetSelectedItemTypeAtom);
  const setSectionAndItemType = (section: Sections) => {
    setSelectedSection(section);
    setSelectedItemType(section);
  };
  const canvasInstanceRef = useCanvasContext();

  useEffect(() => {
    if (canvasInstanceRef.current) {
      canvasInstanceRef.current.on('mouse:down', handleMouseDown);
      canvasInstanceRef.current.on('selection:cleared', handleSectionCleared);
      return () => {
        canvasInstanceRef.current?.dispose();
      };
    }
  }, []);

  function handleMouseDown(e: fabric.IEvent<Event>) {
    if (!e.target || !e.target?.type) {
      setSectionAndItemType('');
      return;
    }
    const { type } = e.target;
    if (type === 'i-text') {
      setSectionAndItemType('text');
    } else if (type === 'image') {
      setSectionAndItemType('images');
    } else if (elementSectionTypes.includes(type)) {
      setSectionAndItemType('elements');
    }
  }

  function handleSectionCleared() {
    //TODO: cerrar threepoints menu
    setSelectedItemType('');
  }
  console.log('render');
  return (
    <Editor
      ActionsBarChildren={
        <div
          style={{
            height: '100%',
            padding: '1rem',
            paddingInline: '3rem',
          }}
        >
          <ActionsBar
            onExit={() => null}
            onRedo={() => null}
            onSave={() => null}
            onUndo={() => null}
          />
        </div>
      }
      Sidebar={<Sidebar />}
      SidemenuChildren={
        <div style={{ padding: '1rem', display: 'grid', gap: '0.5rem' }}>
          <BackgroundCard>hola</BackgroundCard>
          <BackgroundCard>chau</BackgroundCard>
          <BackgroundCard>hola</BackgroundCard>
          <BackgroundCard>chau</BackgroundCard>
          <BackgroundCard>hola</BackgroundCard>
          <BackgroundCard>chau</BackgroundCard>
          <BackgroundCard>hola</BackgroundCard>
          <BackgroundCard>chau</BackgroundCard>
          <BackgroundCard>hola</BackgroundCard>
          <BackgroundCard>chau</BackgroundCard>
          <BackgroundCard>hola</BackgroundCard>
          <BackgroundCard>chau</BackgroundCard>
          <BackgroundCard>hola</BackgroundCard>
          <BackgroundCard>chau</BackgroundCard>
          <BackgroundCard>hola</BackgroundCard>
          <BackgroundCard>chau</BackgroundCard>
          <BackgroundCard>hola</BackgroundCard>
          <BackgroundCard>chau</BackgroundCard>
        </div>
      }
      ToolsBarChildren={<Toolbar />}
    >
      <Canvas />
    </Editor>
  );
});
