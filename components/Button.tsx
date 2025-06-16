import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const classes = cva(
  "border border-white h-12 rounded-full px-6 font-medium",
  {
    variants: {
      variant: {
        primary: "bg-lime-400 text-neutral-950 border-lime-400",
        secondary: "border-white text-white bg-transparent",
      },
      size: {
        sm: "h-10",
      },
    },
    defaultVariants: {
      size: undefined, // You can set default size here if needed
    },
  }
);

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, size, className, ...otherProps } = props;

  return (
    <button
      className={clsx(classes({ variant, size }), className)}
      {...otherProps}
    />
  );
}
