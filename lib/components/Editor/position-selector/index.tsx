import style from './style.module.sass';
import { BackgroundCard } from '../BackgroundCard';
import { IconButton } from '../../icon-button';
import { Icon } from '../../icon';

type CommonProps = {
  src: string;
  alt: string;
};

type BasePropsLocked = CommonProps & {
  locked: true;
  onClickUp?: never;
  onClickDown?: never;
};

type BasePropsUnlocked = CommonProps & {
  locked?: false;
  onClickUp: () => void;
  onClickDown: () => void;
};

type Props = BasePropsLocked | BasePropsUnlocked;

export const PositionSelector = ({ alt, src, locked, onClickDown, onClickUp }: Props) => (
  <BackgroundCard className={style.container} padding={8}>
    <img className={style.img} src={src} alt={alt} />
    {!locked ? (
      <div className={style.arrows}>
        <IconButton
          onClick={onClickUp}
          icon="chevron-up"
          iconProps={{
            viewBox: '0 0 24 24',
            strokeWidth: '2',
            fill: 'none',
            stroke: '#344054',
          }}
        />
        <IconButton onClick={onClickDown} icon="chevron-down" />
      </div>
    ) : (
      <Icon
        name="lock"
        viewBox="0 0 24 24"
        size={24}
        fill="none"
        stroke="#344054"
        strokeWidth="2"
      />
    )}
  </BackgroundCard>
);
