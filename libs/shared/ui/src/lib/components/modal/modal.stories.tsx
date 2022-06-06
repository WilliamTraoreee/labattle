import { Story, Meta } from '@storybook/react';
import Button from '../button/button';
import { Modal, ModalProps } from './modal';

export default {
  component: Modal,
  title: 'Modal',
} as Meta;

const content = <p>Coucou</p>;

const trigger = <Button>Trigger</Button>;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: content,
  trigger: trigger,
  title: 'Titre de dingue',
  closeButton: 'Annuler',
  actionButton: {
    action: () => console.log('ok'),
    text: 'Valider',
  },
};
