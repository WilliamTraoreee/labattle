import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface TagProps {
  className?: string;
  children: React.ReactNode;
  selected?: boolean;
  link?: string;
}

export function Tag(props: TagProps) {
  const { className = '', children, selected = false, link } = props;

  if (link) {
    return (
      <Link
        to={link}
        className={`text-xs text-white px-3 inline py-2 rounded-full border border-dark-300 hover:border-dark-100 transition duration-200 ${
          selected ? 'bg-primary-500 border-primary-500' : ''
        } ${className}`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <div
        className={`text-xs text-white px-3 inline py-2 rounded-full border border-dark-300 hover:border-dark-100 transition duration-200 ${
          selected ? 'bg-primary-500 border-primary-500' : ''
        } ${className}`}
      >
        {children}
      </div>
    );
  }
}

export default Tag;
