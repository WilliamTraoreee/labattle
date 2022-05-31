import { Story, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from './avatar';

export default {
  component: Avatar,
  title: 'Avatar',
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://randomuser.me/api/portraits/men/18.jpg',
};
