'use client';

import { useEffect, useState } from 'react';

export const useSideCallapse = () => {
  const [IsCallapse, setIsCallapse] = useState<boolean>(
    typeof window !== 'undefined' && window.innerWidth < 1024 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsCallapse(true);
    } else {
      setIsCallapse(false);
    }
  };

  useEffect(() => {
    if (window !== undefined) {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggle = () => {
    setIsCallapse(!IsCallapse);
  };
  return { IsCallapse, toggle };
};
