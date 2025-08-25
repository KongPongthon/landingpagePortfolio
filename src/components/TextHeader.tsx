'use client';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface Props {
  firsttext: string;
  secondtext: string;
  typeSpeed?: number;
  backSpeed?: number;
  thirdtext?: string;
  className?: string;
}

export default function TextHeader({
  firsttext,
  secondtext,
  thirdtext,
  className,
  typeSpeed = 80,
  backSpeed = 50,
}: Props) {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!el.current) return;

    const strings = [firsttext, '', secondtext, ''];
    if (thirdtext) strings.push(thirdtext, '');

    const typed = new Typed(el.current, {
      strings,
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: true,
    });

    return () => typed.destroy();
  }, [firsttext, secondtext, thirdtext]);

  return (
    <span
      ref={el}
      className={cn(
        'text-2xl font-bold bg-gradient-to-r from-[#6758c5] via-[#ae67fa] to-[#f49867] bg-clip-text text-transparent',
        className
      )}
    ></span>
  );
}
