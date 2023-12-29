import cn from 'classnames';
import type { FC } from 'react';

import styles from './RadioButton.module.sass';
import { useForm } from 'react-hook-form';

export type RadioButtonProps = {
  className?: string;
  label: string;
  value: string;
  name: string;
  reverse?: boolean;
};
export const RadioButton: FC<RadioButtonProps> = ({
  className,
  value,
  reverse,
  name,
  label,
}) => {
  const { register } = useForm();

  return (
    <div style={{ padding: '0 10px' }} className="d-flex">
      <label
        className={cn(styles.checkbox, className, {
          [styles.reverse as string]: reverse,
        })}
      >
        <input className={styles.input} {...register(name)} type="radio" value={value} />
        <span className={styles.inner}>
          <span className={styles.tick} />
        </span>
      </label>
      <span className={styles.text}>{label}</span>
    </div>
  );
};
