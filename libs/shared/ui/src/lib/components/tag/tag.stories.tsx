import { Story, Meta } from '@storybook/react';
import { Tag, TagProps } from './tag';

export default {
  component: Tag,
  title: 'Tag/Tag',
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args}>Tag 1</Tag>;

export const Primary = Template.bind({});
Primary.args = {};
