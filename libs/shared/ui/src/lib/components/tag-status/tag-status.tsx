import { StatusEnum } from '@la-battle/shared/enum';
import { Icon } from '@la-battle/shared/ui';

export interface TagStatusProps {
  className?: string;
  status: StatusEnum;
}

export function TagStatus(props: TagStatusProps) {
  const { className, status } = props;

  const statusClassName = {
    [StatusEnum.ENDED]: 'bg-error-100',
    [StatusEnum.REGISTER]: 'bg-warning-100',
    [StatusEnum.RUNNING]: 'bg-success-100',
    [StatusEnum.VOTE]: 'bg-accent-100',
  };

  const statusContent = {
    [StatusEnum.ENDED]: 'Battle terminée',
    [StatusEnum.REGISTER]: 'Inscription en cours',
    [StatusEnum.RUNNING]: 'Battle en cours',
    [StatusEnum.VOTE]: 'Vote en cours',
  };

  return (
    <div
      className={`h-8 rounded-full text-dark-600 font-bold text-xs inline-flex items-center gap-2 px-3 ${statusClassName[status]} ${className}`}
    >
      <Icon name="time-line" />
      {statusContent[status]}
    </div>
  );
}

export default TagStatus;
