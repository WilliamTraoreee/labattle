import { Icon } from '@la-battle/shared/ui';
import { useState } from 'react';
import DateTimePicker, { DateTimePickerProps } from 'react-datetime-picker';

export interface DateTimeProps {
  className?: string;
  value?: Date;
  onChange?: (value: Date) => void;
  disabled?: boolean;
}

export function DateTime(props: DateTimeProps) {
  const { className = '', value, onChange, disabled = false } = props;

  const [val, setVal] = useState(value ? value : new Date());

  const handleChange = (e: Date) => {
    setVal(e);
    onChange && onChange(e);
  };

  return (
    <DateTimePicker
      disabled={disabled}
      className={`${className}`}
      onChange={handleChange}
      value={val}
      calendarIcon={<Icon name="calendar-line" />}
      clearIcon={<Icon name="close-line" />}
      format="dd/MM/yyyy HH:mm"
      minDate={new Date()}
      minDetail="month"
      disableClock
    />
  );
}

export default DateTime;
