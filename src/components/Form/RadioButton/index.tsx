import cn from 'classnames';
import type { FC } from 'react';
import styles from './RadioButton.module.sass';
import { Controller, useFormContext } from 'react-hook-form';

export type RadioButtonProps = {
  className?: string;
  label: string;
  value: string;
  name: string;
  reverse?: boolean;
  disabled?: boolean;
};

const RadioButton: FC<RadioButtonProps> = ({
  className,
  value,
  reverse,
  name,
  label,
  disabled,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value: radioValue } }) => (
        <div style={{ padding: '0 10px' }} className="d-flex">
          <label
            className={cn(styles.checkbox, className, {
              [styles.reverse as string]: reverse,
            })}
          >
            <input
              disabled={disabled}
              className={styles.input}
              type="radio"
              value={value}
              onChange={onChange}
              checked={radioValue === value}
            />
            <span className={styles.inner}>
              <span className={styles.tick} />
            </span>
          </label>
          <span className={styles.text}>{label}</span>
        </div>
      )}
    />
  );
};

export default RadioButton;
