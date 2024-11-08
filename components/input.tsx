import React from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  id: string;
  name: string;
  className?: string;
}

export default function Input({
  type,
  id,
  placeholder,
  name,
  className,
}: InputProps) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      className={
        `flex h-10 rounded-md border border-input px-3 py-2 text-sm  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed` +
        className
      }
    />
  );
}
