import { Story, Meta } from '@storybook/react';
import { Icon, IconProps, IconSVG } from './icon';

export default {
  component: Icon,
  title: 'Icon',
} as Meta;

const copyName = (name: string) => {
  navigator.clipboard.writeText(name);
};

const remixiconList = [
  'home-2-line',
  'delete-bin-line',
  'add-line',
  'close-line',
  'vidicon-line',
  'camera-line',
  'pencil-line',
  'pen-nib-line',
  'music-2-line',
  'check-line',
  'google-fill',
  'twitch-fill',
  'twitter-fill',
  'facebook-fill',
  'arrow-right-s-line',
  'arrow-left-s-line',
  'arrow-up-s-line',
  'arrow-down-s-line',
  'calendar-2-line',
  'time-line',
  'thumb-up-line',
  'error-warning-line',
];

const svgList = [IconSVG.CUBE];

const remixiconContainer = (
  <div className="mx-auto mt-6 p-4 bg-dark-600 w-96 text-white rounded-2xl mb-5">
    <h2 className="font-bold text-center w-full mb-4">Remixicon Icons</h2>
    <div className="flex gap-2 justify-center flex-wrap">
      {remixiconList.map((icon, index) => (
        <span onClick={() => copyName(icon)} className="cursor-pointer">
          <Icon name={icon} key={index} />
        </span>
      ))}
    </div>
  </div>
);

const svgContainer = (
  <div className="mx-auto mt-6 p-4 bg-dark-600 w-96 text-white rounded-2xl">
    <h2 className="font-bold text-center w-full mb-4">SVG Icons</h2>
    <div className="flex gap-2 justify-center flex-wrap">
      {svgList.map((icon, index) => (
        <span onClick={() => copyName(icon)} className="cursor-pointer">
          <Icon name={icon} key={index} />
        </span>
      ))}
    </div>
  </div>
);

const Template: Story<IconProps> = (args) => (
  <>
    {remixiconContainer}
    {svgContainer}
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  className: '',
};
