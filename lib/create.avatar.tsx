'use client'
import { AvatarImage, Avatar } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';
import { createAvatar } from '@dicebear/core';
import { initials } from '@dicebear/collection';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  seed: string;
  className?: string;
}

export default function CreateAvatar({
  src,
  seed,
  className,
  ...props
}: AvatarProps) {
  const [svg, setSvg] = useState<string>('');
  useEffect(() => {
    const avatar = createAvatar(initials, {
      seed,
      fontSize: 20,
      fontWeight: 600,
    });
    const dataUrl = avatar.toDataUri();
    setSvg(dataUrl);
  }, [seed]);
  return (
    <Avatar className={className} {...props}>
      <AvatarImage
        src={src || svg}
        alt={`avatar ${seed}`}
        className=' h-full rounded-full w-full object-cover'
      />
    </Avatar>
  );
}
