import * as Dialog from '@radix-ui/react-dialog';
import { triggerAsyncId } from 'async_hooks';

export interface ModalProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export function Modal(props: ModalProps) {
  const { trigger, content } = props;

  return (
    <Dialog.Root>
      <Dialog.Trigger>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title />
          {content}
          <Dialog.Description />
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
