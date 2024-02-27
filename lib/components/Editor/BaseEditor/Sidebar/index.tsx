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
      <div>
        {buttons.map((button, i) => (
          <button
            key={button.title}
            onClick={button.onClick}
            className={`${style.button} ${button.isSelected && style.selected} ${
              buttons[i - 1]?.isSelected
                ? style.prevSelected
                : buttons[i + 1]?.isSelected
                ? style.nextSelected
                : null
            }`}
          >
            <Icon {...button.icon} />
            <span>{button.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
