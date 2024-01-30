import { Icon, IconProps } from '../Icon';
import style from './style.module.sass';

type Props = {
  iconProps: Omit<IconProps, 'onClick'>;
  label: string;
  active?: boolean;
};

export const SidebarIcon = ({ active, iconProps, label }: Props) => {
  return (
    <div className={`${style.sidebarIcon} ${active ? style.active : null}`}>
      <Icon {...iconProps} />
      <span>{label}</span>
    </div>
  );
};
