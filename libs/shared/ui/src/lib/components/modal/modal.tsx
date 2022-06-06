import { Icon } from '@la-battle/shared/ui';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import Button, { ButtonVariant } from '../button/button';

export interface ModalProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  title?: string;
  closeButton?: string;
  actionButton?: {
    action?: () => void;
    text?: string;
  };
}

export function Modal(props: ModalProps) {
  const { trigger, content, title, closeButton, actionButton } = props;

  const [open, setOpen] = useState(false);

  const bottomActions = (
    <div className="flex justify-end gap-2 mt-4">
      {closeButton && (
        <Button onClick={() => setOpen(false)} variant={ButtonVariant.STROKED}>
          {closeButton}
        </Button>
      )}
      {actionButton && (
        <Button onClick={actionButton.action}>{actionButton.text}</Button>
      )}
    </div>
  );

  return (
    <Dialog.Root onOpenChange={setOpen} open={open}>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>
      <Dialog.Portal className="modal">
        <Dialog.Overlay className="modal__overlay w-full h-full bg-dark-500/80 absolute top-0 left-0" />
        <Dialog.Content className="modal__content text-white z-10 absolute p-6 rounded-[16px] bg-dark-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl w-11/12">
          <div className="flex justify-between items-center w-full mb-4">
            {title && <h3 className="font-medium text-2xl">{title}</h3>}
            <button
              className="w-10 h-10 rounded-full bg-dark-400 flex items-center justify-center outline-none"
              onClick={() => setOpen(false)}
            >
              <Icon name="close-line" />
            </button>
          </div>
          {content}
          {(closeButton || actionButton) && bottomActions}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
