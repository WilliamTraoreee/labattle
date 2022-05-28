import { Story, Meta } from '@storybook/react';
import { DateTime, DateTimeProps } from './date-time';

export default {
  component: DateTime,
  title: 'Forms/DateTime',
} as Meta;

const Template: Story<DateTimeProps> = (args) => <DateTime {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
