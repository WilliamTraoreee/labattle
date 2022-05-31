import { Link } from 'react-router-dom';

export interface AvatarProps {
  src?: string;
  pseudo?: string;
  size?: number;
  link?: string;
  className?: string;
}

export function Avatar(props: AvatarProps) {
  const { src, pseudo, size = 64, link, className = '' } = props;

  const pseudoSize = (size: number) => {
    if (size < 32) return 'text-xxs';
    else return 'text-xs';
  };

  const contentAvatar = () => {
    if (src) {
      return (
        <div style={{ width: size, height: size }}>
          <img
            src={src}
            alt="avatar"
            className={className}
            style={{ width: size, height: size, borderRadius: size / 3 }}
          />
        </div>
      );
    } else {
      return (
        <div
          style={{
            width: size,
            height: size,
            borderRadius: size / 3,
            fontSize: size / 3 + 'px',
          }}
          className={`bg-dark-400 text-white items-center justify-center flex ${className}`}
        >
          {pseudo?.slice(0, 2)}
        </div>
      );
    }
  };

  if (link) {
    return <Link to={link}>{contentAvatar()}</Link>;
  } else {
    return contentAvatar();
  }
}

export default Avatar;
