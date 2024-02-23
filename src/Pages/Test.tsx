import React from 'react';
import { Editor } from '../../lib/components/Editor/BaseEditor';
import { Sidebar } from '../../lib/components/Editor/BaseEditor/Sidebar';
import { AppButton, BackgroundCard } from '../../dist/main';
import icon from '../../public/logo192.png';
import { GraphicEditor } from '../../lib/components/GraphicEditor';

const Test = () => {
  return (
    <div>
      <Editor
        ActionsBarChildren={<AppButton color="red" title="salva" />}
        SidebarProps={{
          buttons: [
            {
              icon: { name: 'plus-circle' },
              onClick: (title) => null,
              title: 'titulo',
              isSelected: true,
            },
            {
              icon: { name: 'plus-circle' },
              onClick: (title) => null,
              title: 'titulo',
              isSelected: false,
            },
          ],
        }}
        SidemenuChildren={
          <div style={{ padding: '1rem' }}>
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
            <BackgroundCard>hola</BackgroundCard>
            <BackgroundCard>chau</BackgroundCard>
            <BackgroundCard>hola</BackgroundCard>
            <BackgroundCard>chau</BackgroundCard>
          </div>
        }
        ToolsBarChildren={
          <div
            style={{
              padding: '1rem',
              height: '100%',
              display: 'grid',
              alignContent: 'center',
              justifyContent: 'left',
            }}
          >
            <AppButton color="orange" title="orange" />
          </div>
        }
      >
        hola
        <h1>fdasfds</h1>
        <AppButton color="blue" title="dsad"></AppButton>
      </Editor>
      <GraphicEditor onExit={() => null} onSave={() => null}></GraphicEditor>
    </div>
  );
};

export default Test;
