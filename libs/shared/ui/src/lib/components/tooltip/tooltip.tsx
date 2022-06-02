import * as TooltipLib from '@radix-ui/react-tooltip';

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'right' | 'left';
}

export function Tooltip(props: TooltipProps) {
  const { children, content, position = 'top' } = props;

  return (
    <TooltipLib.Provider delayDuration={700}>
      <TooltipLib.Root>
        <TooltipLib.Trigger>{children}</TooltipLib.Trigger>
        <TooltipLib.Content
          side={position}
          sideOffset={4}
          className="text-xs text-white py-1 px-2 bg-dark-800 rounded"
        >
          {content}
          <TooltipLib.Arrow
            className="fill-dark-800 rounded-sm"
            width={10}
            height={5}
          />
        </TooltipLib.Content>
      </TooltipLib.Root>
    </TooltipLib.Provider>
  );
}

export default Tooltip;
