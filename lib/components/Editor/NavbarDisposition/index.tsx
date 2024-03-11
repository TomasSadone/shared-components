import { BackgroundCard } from '../BackgroundCard';
import style from './style.module.sass';

type Dispositions =
  | 'Logo-LinksAction'
  | 'LogoLinks-Action'
  | 'LogoLinksAction'
  | 'LinksLogoAction'
  | 'Logo-Action_Links';

type Props = {
  disposition: Dispositions;
  button: JSX.Element;
};

function renderDisposition(disposition: Dispositions): JSX.Element {
  switch (disposition) {
    case 'Logo-LinksAction':
      return (
        <div className={[style.layoutContainer, style.logoLeftRestRight].join(' ')}>
          <div className={style.logo}>
            <p>Logo</p>
          </div>
          <div className={style.subGroupContainer}>
            <div className={style.links}>
              <span />
              <span />
              <span />
            </div>
            <div className={style.button} />
          </div>
        </div>
      );
    case 'LogoLinks-Action':
      return (
        <div className={[style.layoutContainer, style.restLeftButtonRight].join(' ')}>
          <div className={style.subGroupContainer}>
            <div className={style.logo}>
              <p>Logo</p>
            </div>
            <div className={style.links}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={style.button} />
        </div>
      );
    case 'LinksLogoAction':
      return (
        <div className={[style.layoutContainer, style.linksLogoButton].join(' ')}>
          <div className={style.links}>
            <span />
            <span />
            <span />
          </div>
          <div className={style.logo}>
            <p>Logo</p>
          </div>
          <div className={style.button} />
        </div>
      );
    case 'LogoLinksAction':
      return (
        <div className={[style.layoutContainer, style.logoLinksButton].join(' ')}>
          <div className={style.logo}>
            <p>Logo</p>
          </div>
          <div className={style.links}>
            <span />
            <span />
            <span />
          </div>
          <div className={style.button} />
        </div>
      );
    case 'Logo-Action_Links':
      return (
        <div className={style.logoButton_Links}>
          <div className={style.layoutContainer}>
            <div className={style.logo}>
              <p>Logo</p>
            </div>
            <div className={style.button} />
          </div>
          <div className={style.links}>
            <span />
            <span />
            <span />
          </div>
        </div>
      );
  }
}

export const NavbarDisposition = ({ disposition, button }: Props) => {
  return (
    <BackgroundCard padding={0} className={style.card}>
      {renderDisposition(disposition)}
      <div className={style.buttonContainer}>{button}</div>
    </BackgroundCard>
  );
};
