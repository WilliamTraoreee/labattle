import CubeIcon from './icons/cube';

export enum IconSVG {
  CUBE = 'cube',
}

export interface IconProps {
  name: IconSVG | string;
  className?: string;
}

export function Icon(props: IconProps) {
  const { name, className = '' } = props;

  const iconContent = (name: IconSVG | string) => {
    switch (name) {
      case IconSVG.CUBE:
        return <CubeIcon {...props} />;
      default:
        return <i className={`ri-${name} ${className}`}></i>;
    }
  };

  return iconContent(name);
}

export default Icon;
