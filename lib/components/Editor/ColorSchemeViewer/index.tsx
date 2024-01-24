import { Color } from '../../Color';
import style from './style.module.sass';

type Props = {
  colors: string[];
  button?: JSX.Element;
};

export const ColorSchemeViewer = ({ colors, button }: Props) => (
  <div className={style.container}>
    {colors.map((color) => (
      <Color className={style.color} hexCode={color} />
    ))}
    {button ? button : null}
  </div>
);
