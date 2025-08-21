import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
interface Props {
  name: string;
  className?: string;
}
export function CustomButton({ name, className }: Props) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2 md:flex-row')}>
      <Button className={cn(className)}>{name}</Button>
    </div>
  );
}
