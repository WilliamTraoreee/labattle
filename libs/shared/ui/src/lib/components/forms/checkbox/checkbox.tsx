export type CheckboxProps = {
  label?: string;
  className?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export function Checkbox(props: CheckboxProps) {
  const { label, className = '', ...otherProps } = props;

  return (
    <div
      className={`checkbox ${
        otherProps?.disabled ? 'checkbox--disabled' : ''
      } ${className}`}
    >
      <input type="checkbox" {...otherProps} />
      <label htmlFor={otherProps.id}>
        <span className="checkbox__check"></span>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
