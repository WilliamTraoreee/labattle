import Icon, { IconSVG } from '../../icon/icon';

export type InputProps = {
  className?: string;
  success?: boolean;
  error?: boolean;
  icon?: string | IconSVG;
} & React.ComponentPropsWithoutRef<'input'>;

export function Input(props: InputProps) {
  const {
    className = '',
    success = false,
    error = false,
    icon,
    ...otherProps
  } = props;

  const defineSuccess = success ? '!border-success-500' : '';
  const defineError = error ? '!border-error-500' : '';

  const defineClassName = `border-dark-300 inline-flex h-12  text-white bg-transparent rounded border outline-0 hover:border-primary-300 focus:border-primary-500 transition duration-300 w-full ${
    icon ? 'pl-10 pr-4' : 'px-4'
  } ${defineError} ${defineSuccess} ${className}`;

  return (
    <div className="relative">
      {icon && (
        <Icon
          name={icon}
          className="text-light-600 absolute top-1/2 -translate-y-1/2 left-4"
        />
      )}
      <input type="text" {...otherProps} className={defineClassName} />
    </div>
  );
}

export default Input;
