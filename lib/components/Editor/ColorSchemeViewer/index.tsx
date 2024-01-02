import { HTMLFactory } from 'react';
import style from './style.module.sass';

type Props = {
  colors: string[];
  button?: JSX.Element;
};

export const ColorSchemeViewer = ({ colors, button }: Props) => (
  <div className={style.container}>
    {colors.map((color) => (
      <div className={style.color} style={{ backgroundColor: color }} />
    ))}
    {button ? button : null}
  </div>
);
