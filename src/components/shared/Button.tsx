import React from "react";

interface ButtonProps {
  title: string;
  classNames?: string;
  children?: React.ReactNode;
}

export default function Button({ classNames, title, children }: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-2 py-1 rounded-xl border border-gray-300 ${classNames}`}
    >
      {children && <div>{children}</div>}
      <p className="font-kante text-sm text-inherit font-normal">{title}</p>
    </button>
  );
}
