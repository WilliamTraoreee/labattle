import { IconSVG } from '@la-battle/shared/ui';

export interface Option {
  label: string;
  value: string;
  icon?: string | IconSVG;
  disabled?: boolean;
}
