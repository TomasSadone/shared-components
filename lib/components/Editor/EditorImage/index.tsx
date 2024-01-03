import { ImgHTMLAttributes } from 'react';
import style from './style.module.sass';

export const EditorImage = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img className={style.img} {...props} />
);
