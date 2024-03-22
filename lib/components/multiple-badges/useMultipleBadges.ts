import { useMemo, useRef, useState } from 'react';
import style from './style.module.sass';
import { MultipleBadgesProps } from '.';

const useMultipleBadges = ({ badges }: MultipleBadgesProps) => {
  const [coords, setCoords] = useState({});

  const { extraBadges, renderedBadges } = useMemo(() => {
    const extraBadges = badges.slice(3);
    const renderedBadges = badges.slice(0, 3);

    return { extraBadges, renderedBadges };
  }, [badges]);

  const toolpit = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const coordsToSet = {
      left: rect.x - rect.width * 0.75,
      top: rect.y + window.scrollY + 30,
    };

    setCoords(coordsToSet);

    toolpit.current?.classList.add(style['show']);
  };
  const handleMouseLeave = () => toolpit.current?.classList.remove(style['show']);

  return {
    coords,
    extraBadges,
    renderedBadges,
    toolpit,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useMultipleBadges;
