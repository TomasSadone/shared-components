import style from './style.module.sass';

type Props = {
  text: string;
  supportingText?: string;
  isLeadText?: boolean;
};

const Text = ({ text, isLeadText, supportingText }: Props) => {
  if (supportingText)
    return (
      <div className={`${style.text} ${style.multiText}`}>
        <p className={`${style.supportingText} ${isLeadText && style.leadText}`}>{text}</p>
        <p>{supportingText}</p>
      </div>
    );

  return <p className={`${style.text} ${isLeadText && style.leadText}`}>{text}</p>;
};

export default Text;
