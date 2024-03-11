import { ActionsBar } from './ActionsBar';
import { Sidemenu } from './Submenu';
import { Toolsbar } from './Toolbar';
import style from './style.module.sass';
import './reset.sass';

type ReactNode = React.ReactNode;

type Props = {
  ActionsBarChildren: ReactNode;
  ToolsBarChildren?: ReactNode;
  Sidebar: ReactNode;
  SidemenuChildren?: ReactNode;
  children: ReactNode;
};
export const Editor = ({
  ActionsBarChildren,
  ToolsBarChildren,
  Sidebar,
  SidemenuChildren,
  children,
}: Props) => {
  return (
    <div className={style.editor}>
      <ActionsBar>{ActionsBarChildren}</ActionsBar>
      <div className={style.layout}>
        {Sidebar}
        <Sidemenu>{SidemenuChildren}</Sidemenu>
        <div className={style.toolbarAndEditor}>
          <Toolsbar>{ToolsBarChildren}</Toolsbar>
          <div className={style.main}>{children}</div>
        </div>
      </div>
    </div>
  );
};
