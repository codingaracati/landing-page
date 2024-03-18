import type { HTMLProps } from "react";

type ButtonProps = HTMLProps<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="px-8 py-4 bg-primary text-white rounded-md font-normal text-sm"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;