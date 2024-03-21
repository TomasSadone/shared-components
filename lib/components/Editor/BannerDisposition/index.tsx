import { Icon } from '../../icon';
import { BackgroundCard } from '../BackgroundCard';
import style from './style.module.sass';

type Dispositions = 'side to side' | 'front and back' | 'up and bottom';

type Props = {
  textImageDisposition: Dispositions;
  button?: JSX.Element;
};

function renderDisposition(disposition: Dispositions): JSX.Element {
  switch (disposition) {
    case 'side to side':
      return (
        <div className={`${style.layoutContainer} ${style.sideToSide}`}>
          <div className={style.textContainer}>
            <div className={style.heading} />
            <div className={style.paragraph}>
              <span></span>
            </div>
            <div className={style.footer} />
          </div>
          <div className={style.img}>
            <Icon
              name="image"
              fill="none"
              viewBox="0 0 24 24"
              size={24}
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </div>
        </div>
      );
    case 'front and back':
      return (
        <div className={`${style.layoutContainer} ${style.frontAndBack}`}>
          <div className={style.img}>
            <Icon
              fill="none"
              viewBox="0 0 24 24"
              size={24}
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              name="image"
            />
          </div>
          <div className={style.textContainer}>
            <div className={style.heading} />
            <div className={style.paragraph}>
              <span></span>
            </div>
            <div className={style.footer} />
          </div>
        </div>
      );
    case 'up and bottom':
      return (
        <div className={`${style.layoutContainer} ${style.upAndBottom}`}>
          <div className={style.textContainer}>
            <div className={style.heading} />
            <div className={style.paragraph}>
              <span></span>
            </div>
          </div>
          <div className={style.img}>
            <Icon
              fill="none"
              viewBox="0 0 24 24"
              size={24}
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              name="image"
            />
          </div>
        </div>
      );
  }
}

export const BannerDisposition = ({ textImageDisposition, button }: Props) => (
  <BackgroundCard padding={0} className={style.card}>
    {renderDisposition(textImageDisposition)}
    <div className={style.buttonContainer}>{button && button}</div>
  </BackgroundCard>
);
