'use client';

import * as React from 'react';
import { Dialog, DialogTitle } from '@/components/ui/dialog';
import { AnimatePresence, motion } from 'motion/react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CustomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  position?: 'bottom' | 'right';
}

export function CustomDialog({
  open,
  onOpenChange,
  title,
  children,
  position,
}: CustomDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog open={open} onOpenChange={onOpenChange}>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 z-40 bg-black/50'
          />
          {/* Content */}
          <motion.div
            initial={position === 'bottom' ? { y: '100%' } : { x: '100%' }}
            animate={position === 'bottom' ? { y: 0 } : { x: 0 }}
            exit={position === 'bottom' ? { y: '100%' } : { x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className={cn(
              'fixed z-50 bg-white flex flex-col',
              position === 'bottom'
                ? 'inset-x-0 bottom-0 h-full'
                : 'inset-y-0 right-0 w-full md:w-[500px]'
            )}
          >
            {/* Hidden title for accessibility */}
            <VisuallyHidden>
              <DialogTitle>{title}</DialogTitle>
            </VisuallyHidden>

            {/* Header */}
            <div className='p-4 border-b flex justify-between items-center'>
              <h2 className='text-lg font-bold'>{title}</h2>
              <Button variant='ghost' onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </div>

            {/* Body */}
            <div className='flex-1 overflow-y-auto p-6'>{children}</div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
