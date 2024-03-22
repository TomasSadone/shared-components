import { useFormContext } from 'react-hook-form';
import style from './style.module.sass';

type Props = {
  name: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ name, ...props }: Props) => {
  const { register } = useFormContext();

  return <textarea className={style.textarea} {...register(name)} {...props} />;
};
