import { Story, Meta } from '@storybook/react';
import { Radio, RadioProps } from './radio';

export default {
  component: Radio,
  title: 'Forms/Radio',
} as Meta;

const Template: Story<RadioProps> = (args) => (
  <>
    <Radio {...args} />
    <Radio {...args} id="radio2" />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Radio',
  id: 'radio1',
  disabled: true,
  name: 'test-radio',
};
