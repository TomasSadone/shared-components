import { BackgroundCard } from '../Editor/BackgroundCard';
import { Icon } from '../Icon';
import style from './style.module.sass';
type Props = {
  text: string;
  children: React.ReactNode;
  open: boolean;
  handleOpen: (open: boolean) => void;
};

export const Accordion = ({ text, children, handleOpen, open }: Props) => {
  return (
    <div onClick={() => handleOpen(!open)}>
      <BackgroundCard className={style.card}>
        <p>{text}</p>
        <Icon className={`${style.chevron} ${open && style.open}`} name="chevron-down" />
      </BackgroundCard>
      <div className={`${style.children} ${open && style.open}`}>
        <div>{children}</div>
      </div>
    </div>
  );
};
