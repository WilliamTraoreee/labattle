import { Icon } from '@la-battle/shared/ui';
import { Link } from 'react-router-dom';
import { ButtonProps, ButtonVariant } from '../button/button';

export type ButtonLinkProps = {
  link: { url: string; external?: boolean };
} & ButtonProps;

export function ButtonLink(props: ButtonLinkProps) {
  const { link = { url: '', external: false }, ...otherProps } = props;

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
    otherProps.btnIcon ? 'w-8' : 'gap-2 inline-flex px-3'
  } ${otherProps.className} ${
    otherProps.variant && defineVariant[otherProps.variant]
  }`;

  const btnContent = () => {
    if (otherProps.btnIcon) {
      return <Icon name={otherProps.btnIcon} />;
    } else {
      return (
        <>
          {otherProps.contentLeft && otherProps.contentLeft}
          {otherProps.children}
          {otherProps.contentRight && otherProps.contentRight}
        </>
      );
    }
  };

  const btnType = () => {
    if (link.external) {
      return (
        <a
          href={link.url}
          target="_blank"
          className={defineClassName}
          rel="noreferrer"
        >
          {btnContent()}
        </a>
      );
    } else {
      return (
        <Link to={link.url} className={defineClassName}>
          {btnContent()}
        </Link>
      );
    }
  };
  return btnType();
}

export default ButtonLink;
