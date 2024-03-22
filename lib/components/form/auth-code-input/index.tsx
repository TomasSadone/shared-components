import React from 'react';
import AuthCode, { AuthCodeProps, AuthCodeRef } from 'react-auth-code-input';
import style from './style.module.sass';

type AuthInputExtraProps = {
  error?: boolean;
  success?: boolean;
  size?: 'sm' | 'md' | 'lg';
  length?: number;
  allowedCharacters?: 'numeric' | 'alpha' | 'alphanumeric';
};

type AuthCodeInputProps = AuthInputExtraProps & AuthCodeProps;

/*
 * Recommended handleClick
 *   const [result, setResult] = useState('');
 *   const handleOnChange = (res: string) => {
 *    setResult(res);
 *   };
 *
 *   For further documentation check: 'https://www.npmjs.com/package/react-auth-code-input'
 */

export const AuthCodeInput = React.forwardRef<AuthCodeRef, AuthCodeInputProps>(
  (
    { length = 4, size = 'sm', allowedCharacters = 'numeric', error, success, ...props },
    ref,
  ) => (
    <>
      <AuthCode
        inputClassName={` ${style.authInput} ${style[size]} ${error && style.error} ${
          success && style.success
        }`}
        containerClassName={`${style[size]} ${style.authContainer}`}
        length={length}
        ref={ref}
        allowedCharacters={allowedCharacters}
        {...props}
      />
    </>
  ),
);
