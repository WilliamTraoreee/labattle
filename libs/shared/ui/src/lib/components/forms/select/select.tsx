import { Option } from '@la-battle/shared/interface';
import {
  ListboxOption,
  ListboxButton,
  ListboxPopover,
  ListboxInput,
  ListboxList,
} from '@reach/listbox';
import { useState } from 'react';
import Icon from '../../icon/icon';

export type SelectProps = {
  className?: string;
  options: Option[];
  defaultValue?: string;
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
};

export function Select(props: SelectProps) {
  const {
    className,
    options,
    defaultValue,
    error = false,
    success = false,
    disabled = false,
  } = props;

  const [value, setValue] = useState(
    defaultValue ? defaultValue : options[0].value
  );

  const optionLabel = options.find((o) => o.value === value)?.label;
  const optionIcon = options.find((o) => o.value === value)?.icon
    ? options.find((o) => o.value === value)?.icon
    : '';

  const defineSuccess = success ? 'select--success' : '';
  const defineError = error ? 'select--error' : '';
  const defineDisable = disabled ? 'select--disabled' : '';

  return (
    <ListboxInput
      className={`${defineSuccess} ${defineError} ${defineDisable} ${className}`}
      disabled={disabled}
    >
      <ListboxButton>
        <div className="flex items-center gap-2 h-full">
          {optionIcon && <Icon name={optionIcon} />}
          {optionLabel}
        </div>
        <Icon
          name="arrow-down-s-line"
          className="select--arrow text-light-800 transition duration-300 ease-out"
        />
      </ListboxButton>
      <ListboxPopover>
        <ListboxList>
          {options.map((option: Option, index: number) => (
            <ListboxOption
              key={index}
              value={option.value}
              onClick={() => setValue(option.value)}
              disabled={option?.disabled}
            >
              <div className="flex items-center gap-2">
                {option.icon && <Icon name={option.icon} />}
                {option.label}
              </div>
              {value === option.value && (
                <Icon name="check-line" className="text-primary-500" />
              )}
            </ListboxOption>
          ))}
        </ListboxList>
      </ListboxPopover>
    </ListboxInput>
  );
}

export default Select;
