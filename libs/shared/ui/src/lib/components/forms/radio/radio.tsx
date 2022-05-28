export type RadioProps = {
  label?: string;
  className?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export function Radio(props: RadioProps) {
  const { label, className = '', ...otherProps } = props;

  return (
    <div
      className={`radio ${
        otherProps?.disabled ? 'radio--disabled' : ''
      } ${className}`}
    >
      <input type="radio" {...otherProps} />
      <label htmlFor={otherProps.id}>
        <span className="radio__check"></span>
        {label}
      </label>
    </div>
  );
}

export default Radio;
