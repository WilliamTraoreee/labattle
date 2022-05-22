import { Icon, IconSVG } from '@la-battle/shared/ui';

export enum ButtonVariant {
  NORMAL = 'normal',
  DARK = 'dark',
  LIGHT = 'light',
  STROKED = 'stroked',
}

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  contentLeft?: React.ReactNode;
  contentRight?: React.ReactNode;
  btnIcon?: string | IconSVG;
} & React.ComponentPropsWithoutRef<'button'>;

export function Button(props: ButtonProps) {
  const {
    children,
    className,
    variant = ButtonVariant.NORMAL,
    contentLeft,
    contentRight,
    btnIcon,
    ...otherProps
  } = props;

  const defineVariant = {
    [ButtonVariant.NORMAL]:
      'bg-primary-500 hover:bg-primary-400 active:bg-primary-600 disabled:bg-primary-100',
    [ButtonVariant.DARK]:
      'bg-dark-600 hover:bg-dark-700 active:bg-dark-800 disabled:bg-dark-100',
    [ButtonVariant.LIGHT]:
      'text-dark-200 bg-light-500 hover:bg-light-300 active:bg-light-600 disabled:bg-light-900',
    [ButtonVariant.STROKED]:
      'bg-transparent border border-dark-300 hover:bg-dark-300 active:bg-dark-400 active:border-dark-400 disabled:border-dark-400',
  };

  const defineClassName = `text-xs font-bold h-8 items-center text-white rounded transition ${
    btnIcon ? 'w-8' : 'gap-2 inline-flex px-3'
  } ${className} ${defineVariant[variant]}`;

  if (btnIcon) {
    return (
      <button {...otherProps} className={defineClassName}>
        <Icon name={btnIcon} />
      </button>
    );
  }

  return (
    <button {...otherProps} className={defineClassName}>
      {contentLeft && contentLeft}
      {children}
      {contentRight && contentRight}
    </button>
  );
}

export default Button;
