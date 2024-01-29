import { ReactNode } from 'react';
import { Tooltip } from '../../Tooltip';
import { Color } from '../../Color';
import { IconButton } from '../../IconButton';
import style from './style.module.sass';

type Props = {
  text: string;
  color: string;
  tooltipChildren: ReactNode;
};

export const SingleColorViewer = ({ tooltipChildren, color, text }: Props) => {
  return (
    <div className={style.container}>
      <Color className={style.colorSquare} hexCode={color} />
      <div className={style.colorInfo}>
        <span className={style.colorTitle}>{text}</span>
        <span>{color.toUpperCase()}</span>
      </div>
      <Tooltip
        children={tooltipChildren}
        hoverItem={
          <IconButton
            icon={'edit'}
            iconProps={{
              viewBox: '0 0 20 20',
              fill: 'none',
              stroke: '#344054',
              strokeWidth: '1.67',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            }}
          />
        }
        trigger="click"
      />
    </div>
  );
};
