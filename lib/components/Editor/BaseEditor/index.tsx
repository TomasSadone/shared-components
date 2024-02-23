import { Sidebar, Props as TSidebarProps } from './Sidebar';
import { ActionsBar } from './ActionsBar';
import { Sidemenu } from './Submenu';
import { Toolsbar } from './Toolbar';
import style from './style.module.sass';

type ReactNode = React.ReactNode;

type Props = {
  ActionsBarChildren: ReactNode;
  ToolsBarChildren?: ReactNode;
  SidebarProps: TSidebarProps;
  SidemenuChildren?: ReactNode;
  children: ReactNode;
};
export const Editor = ({
  ActionsBarChildren,
  ToolsBarChildren,
  SidebarProps,
  SidemenuChildren,
  children,
}: Props) => {
  return (
    <div className={style.editor}>
      <ActionsBar>{ActionsBarChildren}</ActionsBar>
      <div className={style.layout}>
        <Sidebar {...SidebarProps} />
        <Sidemenu>{SidemenuChildren}</Sidemenu>
        <div className={style.toolbarAndEditor}>
          <Toolsbar>{ToolsBarChildren}</Toolsbar>
          <div className={style.main}>{children}</div>
        </div>
      </div>
    </div>
  );
};

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
