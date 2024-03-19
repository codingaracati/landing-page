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
      onClick={() =>
        window.open("https://chat.whatsapp.com/I15cW5OaDrqGn7YTM3maH8")
      }
    >
      {children}
    </button>
  );
};

export default Button;
