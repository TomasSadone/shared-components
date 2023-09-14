import cn from 'classnames';
import styles from './Input.module.sass';
import { useInput } from './useInput';
import { icons } from 'constants/svgIcons';
import { ValidationRules } from 'utils/formValidator';
import Icon from 'components/Icon';
import { AppColors } from 'types/MainTypes';
import { CSSProperties } from 'react';

type InputOrAreaProps = React.HTMLProps<HTMLInputElement | HTMLTextAreaElement>;

export interface IInputProps extends InputOrAreaProps {
  type?: string;
  id?: string;
  classInput?: string;
  name: string;
  icon?: keyof typeof icons;
  labelIcon?: {
    name: keyof typeof icons;
    viewBox?: string;
  };
  color?: AppColors;
  leftIcon?: JSX.Element;
  validate?: ValidationRules;
  readOnly?: boolean;
  rightIcon?: JSX.Element;
  label?: string;
  wrapperStyle?: CSSProperties;
}

const Input: React.FC<IInputProps> = ({
  className,
  name,
  labelIcon,
  classInput,
  readOnly,
  validate,
  placeholder,
  type = 'text',
  id,
  label,
  icon,
  color,
  rightIcon,
  leftIcon,
  wrapperStyle,
  ...props
}) => {
  const {
    fieldError,
    isPassword,
    register,
    passwordFieldType,
    handleToggleShowPassword,
    isPasswordShown,
  } = useInput(name, type);

  return (
    <div
      className={cn(
        styles.field,
        { [styles.fieldIcon as string]: icon },
        { [styles.fieldRightIcon as string]: rightIcon },
        { [styles.fieldLeftIcon as string]: leftIcon },
        className,
      )}
      style={wrapperStyle}
    >
      {label && (
        <div className={cn(styles.label_container, { [styles[color as string]]: color })}>
          {labelIcon && (
            <div className={styles.label_icon}>
              <Icon {...labelIcon} size={12} />
            </div>
          )}
          <div className={styles.label}>{label} </div>
        </div>
      )}
      <div className={styles.wrap}>
        <input
          className={cn(classInput, fieldError ? styles.inputError : styles.input, {
            [styles[color as string]]: color,
          })}
          data-testid={id}
          readOnly={readOnly}
          {...props}
          {...register(name, validate)}
          placeholder={placeholder}
          type={!isPassword ? type : passwordFieldType}
        />
        {icon && (
          <div className={styles.icon}>
            <Icon name={icon} size={24} />
          </div>
        )}
        {isPassword && (
          <div onClick={handleToggleShowPassword} className={styles['icon-right']}>
            <Icon
              viewBox={isPasswordShown ? '' : '0 0 512 512'}
              name={isPasswordShown ? 'eyeHide' : 'eye'}
              size={15}
            />
          </div>
        )}
        {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
        {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
      </div>
      {fieldError && (
        <div data-testid="inputError" className="error-message">
          {fieldError.message}
        </div>
      )}
    </div>
  );
};

export default Input;
