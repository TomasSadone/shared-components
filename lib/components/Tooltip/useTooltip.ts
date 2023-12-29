import { useRef, useState } from 'react';
import style from './style.module.sass';

const useTooltip = () => {
  const [coords, setCoords] = useState({});
  const tooltipRef = useRef<HTMLDivElement>(null);
  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;

    const spaceLeft = rect.left;
    const spaceRight = window.innerWidth - rect.right;

    const contentHeight = tooltipRef.current?.clientHeight
      ? tooltipRef.current?.clientHeight
      : 100;
    const contentWidth = tooltipRef.current?.clientWidth
      ? tooltipRef.current?.clientWidth
      : 100;
    const coordsToSet = {
      left: spaceRight > spaceLeft ? rect.x : rect.x - contentWidth,
      top:
        spaceAbove > spaceBelow
          ? spaceAbove - contentHeight - 10
          : spaceAbove + rect.height + 10,
    };

    setCoords(coordsToSet);

    tooltipRef.current?.classList.add(style['show']);
  };
  const handleMouseLeave = () => tooltipRef.current?.classList.remove(style['show']);

  return {
    handleMouseEnter,
    handleMouseLeave,
    coords,
    tooltipRef,
  };
};

export default useTooltip;
