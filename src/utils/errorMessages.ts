const errorMessages = {
  numeric: 'formErrors.numeric',
  passwordConfirm: 'formErrors.passwordConfirm',
  min: 'formErrors.min',
  phone: 'formErrors.phone',
  email: 'formErrors.email',
  required: 'formErrors.required',
  url: 'formErrors.url',
  strongPassword: 'formErrors.strongPassword',
  string: 'formErrors.string',
};

export type IValidator =
  | 'email'
  | 'url'
  | 'string'
  | 'minLength'
  | 'numeric'
  | 'phone'
  | 'required'
  | 'passwordConfirm'
  | 'strongPassword';
export default errorMessages;
