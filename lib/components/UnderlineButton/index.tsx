import style from './style.module.sass';

type Props = {
  children: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const UnderlineButton = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={`${props.className && props.className} ${style.button}`}>
      {children}
    </button>
  );
};
