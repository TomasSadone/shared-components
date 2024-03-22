import { FontTypes } from '../../../types/main-types';
import { BGCardWithButton, Props as BGCardWBProps } from '../bg-card-with-button';
import style from './style.module.sass';

type Props = {
  font: FontTypes;
  title: string;
  subtitle: string;
} & Omit<BGCardWBProps, 'children'>;

function classGenerator(font: FontTypes): string {
  return font.split(' ')[0].toLowerCase();
}

export const FontFamilyViewer = ({ font, title, subtitle, ...rest }: Props) => (
  <BGCardWithButton {...rest}>
    <link
      href={`https://fonts.googleapis.com/css2?family=${font
        .split(' ')
        .join('+')}:wght@400;500;600;700&display=swap`}
      rel="stylesheet"
    />
    <div className={`${style[classGenerator(font)]}`}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.subtitle}>{subtitle}</p>
    </div>
  </BGCardWithButton>
);
