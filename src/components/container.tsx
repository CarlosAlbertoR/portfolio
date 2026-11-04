import type { ComponentPropsWithoutRef } from "react";

/** Shared page width and gutters. */
export function Container({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-[1120px] px-5 sm:px-8 ${className}`}
      {...props}
    />
  );
}
