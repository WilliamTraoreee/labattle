import { Story, Meta } from '@storybook/react';
import { ButtonLink, ButtonLinkProps } from './button-link';

export default {
  component: ButtonLink,
  title: 'Buttons/ButtonLink',
} as Meta;

const Template: Story<ButtonLinkProps> = (args) => (
  <ButtonLink {...args}>Go to Google</ButtonLink>
);

export const Primary = Template.bind({});
Primary.args = {
  link: {
    url: 'https://google.com',
    external: true,
  },
};
