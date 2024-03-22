import { Controller, useFormContext } from 'react-hook-form';
import { SelectOptions } from '../../../types/MainTypes';
import { ValidationRules } from '../../../utils/formValidator';
import { Dropdown } from '.';
import { CSSProperties } from 'react';
import { icons } from '../../../constants/svg-icons';

interface IProps {
  name: string;
  validate?: ValidationRules;
  dropdownId: string;
  options: SelectOptions[];
  placeHolder?: string;
  containerStyle?: CSSProperties;
  optionIcon?: keyof typeof icons;
}
export const ControlledDropdown: React.FC<IProps> = ({
  name,
  validate,
  dropdownId,
  options,
  placeHolder,
  containerStyle,
  optionIcon,
}) => {
  const formContext = useFormContext();
  const { control } = formContext;
  //use it to get errors
  //   const fieldError = get(formContext?.formState.errors, name);

  return (
    <Controller
      rules={validate}
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Dropdown
          optionIcon={optionIcon}
          dropDownId={dropdownId}
          items={options}
          selectedItem={value}
          setSelectedItem={onChange}
          placeHolder={placeHolder}
          containerStyle={containerStyle}
        />
      )}
    />
  );
};
