import { Story, Meta } from '@storybook/react';
import { Checkbox, CheckboxProps } from './checkbox';

export default {
  component: Checkbox,
  title: 'Forms/Checkbox',
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Checkbox',
  id: 'checkbox',
  disabled: true,
};
