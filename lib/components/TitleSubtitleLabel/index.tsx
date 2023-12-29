import style from './style.module.sass';

type Props = { title: string; subtitle: string };

export const TitleSubtitleLabel = ({ title, subtitle }: Props) => (
  <div className={style.container}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
);
