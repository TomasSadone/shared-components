import style from './style.module.sass';

type Props = {
  title: string;
  paragraph?: string;
  hr?: 'green' | 'blue' | 'red' | 'orange';
};

export const Header = ({ title, paragraph, hr }: Props) => {
  return (
    <div>
      <h1 className={style.title}>{title}</h1>
      {paragraph ? <p className={style.paragraph}>{paragraph}</p> : null}
      {hr ? <hr className={`${style.hr} ${style[hr]}`} /> : null}
    </div>
  );
};
