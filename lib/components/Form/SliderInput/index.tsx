import style from './style.module.sass';
import { ChangeEvent } from 'react';

export type Props = {
  value: number;
  onChange: (value: number) => void;
  title: string;
  maxValue: number;
  step: number;
};

export const SliderInput = ({ maxValue, step, onChange, value }: Props) => {
  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };
  return (
    <input
      className={style.input}
      type="range"
      id="volume"
      name="volume"
      min="0"
      max={maxValue}
      step={step}
      value={value}
      onChange={handleSliderChange}
      style={{
        // @ts-ignore
        '--value': `${(value * 100) / maxValue}%`,
      }}
    />
  );
};
