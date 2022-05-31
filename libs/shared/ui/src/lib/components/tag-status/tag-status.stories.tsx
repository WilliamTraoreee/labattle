import { StatusEnum } from '@la-battle/shared/enum';
import { Story, Meta } from '@storybook/react';
import { TagStatus, TagStatusProps } from './tag-status';

export default {
  component: TagStatus,
  title: 'Tag/TagStatus',
  argTypes: {
    status: {
      options: [
        StatusEnum.ENDED,
        StatusEnum.REGISTER,
        StatusEnum.RUNNING,
        StatusEnum.VOTE,
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<TagStatusProps> = (args) => <TagStatus {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  status: StatusEnum.RUNNING,
};
