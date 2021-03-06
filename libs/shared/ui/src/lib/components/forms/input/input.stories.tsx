import { Story, Meta } from '@storybook/react';
import { Input, InputProps } from './input';

export default {
  component: Input,
  title: 'Forms/Input',
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
