import { Option } from '@la-battle/shared/interface';
import { Icon } from '@la-battle/shared/ui';
import { useState } from 'react';

export interface CheckboxButtonProps {
  name: string;
  options: Option[];
  label?: string;
  onChange?: (values: Option[]) => void;
}

export function CheckboxButton(props: CheckboxButtonProps) {
  const { name, options, label, onChange } = props;

  const [selected, setSelected] = useState<Option[]>([]);

  const handleChecked = (value: Option) => {
    const select = [...selected];
    select.push(value);
    setSelected(select);
    onChange && onChange(select);
  };

  return (
    <div>
      {label && (
        <label className="text-xs font-medium text-white mb-2 block">
          {label}
        </label>
      )}
      <div className="flex items-center gap-3">
        {options.map((option, index) => (
          <div
            key={index}
            className={`checkbox-button ${
              option?.disabled ? 'checkbox-button--disabled' : ''
            }`}
          >
            <input
              type="checkbox"
              name={name}
              id={option.value}
              value={option.value}
              onChange={() => handleChecked(option)}
              disabled={option?.disabled}
            />
            <label htmlFor={option.value}>
              {option.icon && <Icon name={option.icon} />}
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckboxButton;
