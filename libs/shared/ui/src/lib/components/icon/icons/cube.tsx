import { IconProps } from '../icon';

export function CubeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12 22V10.889L21 6v10.667L12 22zM12 10.889L2 6v10.667L12 22M2 6l9.5-5L21 6"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M17 9v9"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M7 9v10M2 11l9.5 5 9.5-5"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M8.108 3.772l8.784 4.456"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M15.867 3.724L7.133 8.276"
      ></path>
    </svg>
  );
}

export default CubeIcon;
