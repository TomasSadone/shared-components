import { useEffect, useState } from 'react';
import { get, useFormContext } from 'react-hook-form';

export const useInput = (name: string, type?: string) => {
  const isPassword = type === 'password';
  const [isPasswordShown, toggleShowPassword] = useState(false);
  const handleToggleShowPassword = (): void => {
    toggleShowPassword(!isPasswordShown);
  };
  const passwordFieldType = isPasswordShown ? 'text' : 'password';

  const formContext = useFormContext();

  const fieldError = get(formContext?.formState.errors, name);

  useEffect(() => {
    if (!fieldError) return;
    fieldError.ref.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }, [fieldError]);
  return {
    fieldError,
    isPassword,
    register: formContext?.register,
    passwordFieldType,
    handleToggleShowPassword,
    isPasswordShown,
  };
};
