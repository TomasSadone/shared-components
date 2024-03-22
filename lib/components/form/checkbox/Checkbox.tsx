import cn from 'classnames';
import type { FC } from 'react';
import styles from './Checkbox.module.sass';

type CheckboxProps = {
  className?: string;
  classCheckboxTick?: string;
  value: boolean;
  onChange: () => void;
  reverse?: boolean;
};

export const Checkbox: FC<CheckboxProps> = ({
  className,
  classCheckboxTick,
  value,
  onChange,
  reverse,
}) => {
  return (
    <label
      className={cn(styles.checkbox, className, {
        [styles.reverse as string]: reverse,
      })}
    >
      <input className={styles.input} type="checkbox" onChange={onChange} checked={value} />
      <span className={styles.inner}>
        <span className={cn(styles.tick, classCheckboxTick)} />
      </span>
    </label>
  );
};
