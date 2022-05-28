import { useState } from 'react';

export interface SwitchProps {
  className?: string;
  value?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
}

export function Switch(props: SwitchProps) {
  const { className = '', value, onChange, disabled, label } = props;

  const [toggle, setToggle] = useState(value);

  const handleClick = () => {
    if (disabled) return;
    const v = !toggle;
    setToggle(v);
    onChange && onChange(v);
  };

  return (
    <div className="flex gap-3 items-center">
      <div
        className={`h-6 w-10 p-1 bg-dark-600 rounded-full transition duration-300 ${
          toggle ? '!bg-primary-500' : ''
        } ${className}`}
        onClick={handleClick}
      >
        <span
          className={`block w-4 h-4 rounded-full bg-white transition duration-300 ${
            disabled ? 'bg-dark-100' : ''
          } ${toggle ? 'translate-x-full' : ''}`}
        ></span>
      </div>
      {label && <label className="text-base text-white">{label}</label>}
    </div>
  );
}

export default Switch;
