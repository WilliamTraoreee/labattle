import { Story, Meta } from '@storybook/react';
import { CheckboxButton, CheckboxButtonProps } from './checkbox-button';

export default {
  component: CheckboxButton,
  title: 'Forms/CheckboxButton',
} as Meta;

const Template: Story<CheckboxButtonProps> = (args) => (
  <CheckboxButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  options: [
    {
      label: 'Test 1',
      value: 'test1',
    },
    {
      label: 'Test 2',
      value: 'test2',
      disabled: true,
    },
    {
      label: 'Test 3',
      value: 'test3',
      icon: 'vidicon-line',
    },
  ],
  name: 'test',
  label: 'Checkbox button',
};
