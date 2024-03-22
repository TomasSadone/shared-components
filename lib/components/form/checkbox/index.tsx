import { Controller, useFormContext } from 'react-hook-form';
import { ValidationRules } from '../../../utils/formValidator';
import { Checkbox } from './checkbox';
import styles from './checkbox.module.sass';

interface IProps {
  name: string;
  validate?: ValidationRules;
  checked?: boolean;
  label: string;
}

export const ControlledCheckbox: React.FC<IProps> = ({ name, validate, checked, label }) => {
  const formContext = useFormContext();
  const { control } = formContext;

  return (
    <Controller
      rules={validate}
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div style={{ padding: '0 10px' }} className="d-flex">
          <Checkbox onChange={onChange} value={checked || value} />
          <span className={styles.text}>{label}</span>
        </div>
      )}
    />
  );
};
