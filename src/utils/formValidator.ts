/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
import { isValidNumber } from 'libphonenumber-js';
import type { Message, ValidateResult, ValidationRule } from 'react-hook-form';

import type { IValidator } from './errorMessages';
import messages from './errorMessages';

export const testRegex = (value: string, regex: RegExp) =>
  value === '' || (value && value.toString().match(regex) !== null);

export interface IValidatorParams {
  validation: IValidator;
  date?: Date;
  betweenParams?: number[];
  inStringArray?: string[];
  maxParams?: number;
  minParams?: number;
  passwordConfirm?: string;
}

const validatorsFunctions = {
  numeric: (val: string) =>
    !val || testRegex(val, /^(\d+.?\d*)?$/) ? undefined : messages.numeric,
  phone: (val?: string) => {
    if (!val) return undefined;

    return isValidNumber(`+${val}`) ? undefined : messages.phone;
  },
  minLength: (minParams: number) => (val?: string) => {
    if (!val) return undefined;

    return val.length >= minParams
      ? undefined
      : messages.min.replace(':min', minParams.toString());
  },
  email: (val?: string) => {
    if (!val) return undefined;

    return testRegex(val, /^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
      ? undefined
      : messages.email;
  },
  required: (val: string | any[]) => {
    if (val instanceof Array) return val.length !== 0 ? undefined : messages.required;

    return val ? undefined : messages.required;
  },
  passwordConfirm: (passwordConfirm: string) => (val: string) =>
    val === passwordConfirm ? undefined : messages.passwordConfirm,
  url: (val?: string) => {
    if (!val) return undefined;

    return testRegex(val, /^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i)
      ? undefined
      : messages.url;
  },
  strongPassword: (val: string) =>
    testRegex(val, /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/g)
      ? undefined
      : messages.strongPassword,
  string: (val: string) => (typeof val === typeof 'string' ? undefined : messages.string),
  mapsAddress: (val: { lng: number } | string) =>
    typeof val !== 'object' || val?.lng === undefined ? messages.string : undefined,
};

type Validate = (data: any) => ValidateResult | Promise<ValidateResult>;
export type ValidationRules = Partial<{
  required: Message | ValidationRule<boolean>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number>;
  minLength: ValidationRule<number>;
  pattern: ValidationRule<RegExp>;
  validate: Validate | Record<string, Validate>;
}>;
const Validators = (params: IValidatorParams[]): ValidationRules => {
  let validators: ValidationRules['validate'] = {};

  params.forEach((o) => {
    const { validation } = o;

    switch (validation) {
      case 'minLength':
        if (o.minParams)
          validators = {
            ...validators,
            [validation]: validatorsFunctions[validation](o.minParams),
          };
        break;
      case 'passwordConfirm':
        if (o.passwordConfirm)
          validators = {
            ...validators,
            [validation]: validatorsFunctions[validation](o.passwordConfirm),
          };
        break;
      default:
        validators = {
          ...validators,
          [validation]: validatorsFunctions[validation],
        };
        break;
    }
  });

  return { validate: validators };
};

export default Validators;
