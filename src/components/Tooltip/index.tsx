import { ReactNode, useRef, useState } from 'react';
import style from './style.module.sass';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
  hoverItem: ReactNode;
};

export const Tooltip = ({ children, hoverItem }: Props) => {
  const [coords, setCoords] = useState({});
  const tooltipRef = useRef<HTMLDivElement>(null);
  const handleMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const spaceAbove = rect.top;
    const spaceBelow = window.innerHeight - rect.bottom;
    const contentHeight = tooltipRef.current?.clientHeight
      ? tooltipRef.current?.clientHeight
      : 100;
    const coordsToSet = {
      left: rect.x,
      top:
        spaceAbove > spaceBelow
          ? spaceAbove - contentHeight - 10
          : spaceAbove + rect.height + 10,
    };

    setCoords(coordsToSet);

    tooltipRef.current?.classList.add(style['show']);
  };
  const handleMouseLeave = () => tooltipRef.current?.classList.remove(style['show']);

  return (
    <div
      className={style.hoverItem}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hoverItem}
      {createPortal(
        <div ref={tooltipRef} className={style.tooltip} style={{ ...coords }}>
          {children}
        </div>,
        document.body,
      )}
    </div>
  );
};

export default Tooltip;
