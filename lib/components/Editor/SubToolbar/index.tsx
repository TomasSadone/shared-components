import { BackgroundCard, Icon } from '../../../main';
import style from './style.module.sass';

type Props = {
  handleMobileView: () => void;
  handleDesktopView: () => void;
  defaultView: 'mobile' | 'desktop';
  className?: string;
};

export const SubToolbar = ({
  defaultView,
  handleDesktopView,
  handleMobileView,
  className,
}: Props) => (
  <div className={[style.container, className].join(' ')}>
    <BackgroundCard className={style.group} padding={0}>
      <div className={`${defaultView === 'desktop' ? style.active : null}`}>
        <Icon
          onClick={handleDesktopView}
          name="computer"
          size={20}
          viewBox="0 0 20 20"
          fill="#667085"
        />
      </div>
      <div className={`${defaultView === 'mobile' ? style.active : null}`}>
        <Icon
          onClick={handleMobileView}
          name="smartphone"
          size={20}
          viewBox="0 0 20 20"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.67"
          stroke="#667085"
          fill="none"
        />
      </div>
    </BackgroundCard>
  </div>
);
