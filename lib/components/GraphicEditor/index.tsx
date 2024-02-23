import React, { forwardRef, useState } from 'react';
import { Editor } from '../Editor/BaseEditor';
import { ActionsBar } from './ActionsBar';
//puede cambiar a ser los tipos como te los dice el canvas para que sea mas simple. ej "i-text"
type Sections = '' | 'images' | 'text' | 'elements' | 'layers' | 'uploads';
type Props = {
  onSave: (template: JSON) => void;
  onExit: () => void;
};

export const GraphicEditor = forwardRef(({ onSave, onExit }: Props, ref) => {
  const [selectedSection, setSelectedSection] = useState<Sections>('');
  return (
    <ActionsBar
      onExit={() => null}
      onSave={() => null}
      onRedo={() => null}
      onUndo={() => null}
    />
  );
  //   return <Editor ActionsBarChildren={}></Editor>;
});

/*
    new Canvas?
    grapiceditor = () => {
        selectedSection,setSelectedsection = state(string);
        new Canvas?
        //config aca o fuera etc
        const canvas

        <editor>
            <sidebar items={{text, icon, onClick, isSelected}} />
            <editor.navbar>
                <graphiceditornavbar[selectedSection]/>
            </navbar>
            <editor.submenu>
                <graphiceditorsubmenu[selectedSection] />
            </submenu>
            <canvas/>
        </editor>
    }
*/
