import { ReactNode, useRef, useState } from 'react';
import style from './style.module.sass';
import { createPortal } from 'react-dom';
import useTooltip from './useTooltip';

type Props = {
  children: ReactNode;
  hoverItem: ReactNode;
};

const Tooltip = ({ children, hoverItem }: Props) => {
  const { coords, handleMouseEnter, handleMouseLeave, tooltipRef } = useTooltip();

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
