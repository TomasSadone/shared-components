import { Icon, IconProps } from '../../../Icon';
import style from './style.module.sass';
export type Props = {
  buttons: {
    icon: IconProps;
    title: string;
    onClick: (e: React.MouseEvent) => void;
    isSelected?: boolean;
  }[];
};

export const Sidebar = ({ buttons }: Props) => {
  return (
    <div className={style.sidebar}>
      {buttons.map((button) => (
        <button
          onClick={button.onClick}
          className={`${style.button} ${button.isSelected && style.selected}`}
        >
          <Icon {...button.icon} />
          <span>{button.title}</span>
        </button>
      ))}
    </div>
  );
};
