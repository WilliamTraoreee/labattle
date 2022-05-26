export type InputProps = {
  className?: string;
  success?: boolean;
  error?: boolean;
} & React.ComponentPropsWithoutRef<'input'>;

export function Input(props: InputProps) {
  const {
    className = '',
    success = false,
    error = false,
    ...otherProps
  } = props;

  const defineSuccess = success ? '!border-success-500' : '';
  const defineError = error ? '!border-error-500' : '';

  const defineClassName = `border-dark-300 inline-flex h-12 px-4 text-white bg-transparent rounded border outline-0 hover:border-primary-300 focus:border-primary-500 transition ${defineError} ${defineSuccess} ${className}`;

  return <input type="text" {...otherProps} className={defineClassName} />;
}

export default Input;
