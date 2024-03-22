import { Badge } from '../badge';
import style from './style.module.sass';
import { AppColors } from '../../types/main-types';
import { createPortal } from 'react-dom';
import useMultipleBadges from './useMultipleBadges';

export type BadgeProps = {
  text: string;
  withDot?: boolean;
  color?: AppColors | 'pink';
  stroke?: boolean;
};
export type MultipleBadgesProps = {
  badges: BadgeProps[];
};

export const MultipleBadges = (props: MultipleBadgesProps) => {
  const { coords, extraBadges, renderedBadges, toolpit, handleMouseEnter, handleMouseLeave } =
    useMultipleBadges(props);

  return (
    <div className={style.badges}>
      {renderedBadges !== null
        ? renderedBadges.map((badge) => (
            <div key={badge.text} title={badge.text}>
              <Badge {...badge} />
            </div>
          ))
        : null}
      {extraBadges && extraBadges.length ? (
        <div className={style.extraBadgesContainer}>
          <span
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className={style.extraBadgesIndicator}
          >{`+${extraBadges.length}`}</span>
          {createPortal(
            <div style={{ ...coords }} ref={toolpit} className={style.tooltip}>
              {extraBadges.map((badge) => (
                <Badge key={badge.text} {...badge} />
              ))}
            </div>,
            document.body,
          )}
        </div>
      ) : null}
    </div>
  );
};
