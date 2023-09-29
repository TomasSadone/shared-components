import style from './style.module.sass';

type Props = { title: string; subtitle: string };

const TitleSubtitleLabel = ({ title, subtitle }: Props) => (
  <div className={style.container}>
    <h2>{title}</h2>
    <p>{subtitle}</p>
  </div>
);

export default TitleSubtitleLabel;
