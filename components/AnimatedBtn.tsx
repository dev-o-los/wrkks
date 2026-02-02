/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { cloneElement, ReactElement, useRef } from "react";
import { AnimatedIconHandle } from "./ui/types";

type AnimatedIconButtonProps = {
  icon: ReactElement;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function AnimatedIconButton({
  icon,
  children,
  className,
  onClick,
}: AnimatedIconButtonProps) {
  const iconRef = useRef<AnimatedIconHandle>(null);

  return (
    <Button
      variant={"outline"}
      onClick={onClick}
      className={`flex items-center gap-2 ${className ?? ""}`}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      {cloneElement(icon as any, { ref: iconRef })}
      {children}
    </Button>
  );
}
