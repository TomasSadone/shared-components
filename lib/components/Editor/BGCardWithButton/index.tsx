import { BackgroundCard, Props as BGCardProps } from '../BackgroundCard';
import style from './style.module.sass';

export type Props = {
  button: JSX.Element;
  position: 'left' | 'center' | 'right';
} & BGCardProps;

export const BGCardWithButton = ({ children, button, position, ...rest }: Props) => (
  <BackgroundCard {...rest}>
    {children}
    <div style={{ paddingTop: rest.padding }} className={`${style[position]} ${style.button}`}>
      {button}
    </div>
  </BackgroundCard>
);
