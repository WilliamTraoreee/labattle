import { Story, Meta } from '@storybook/react';
import { Select, SelectProps } from './select';

export default {
  component: Select,
  title: 'Forms/Select',
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

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
};
