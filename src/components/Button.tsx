type ButtonProps = {
  children: React.ReactNode;
  url: string;
};

const Button = ({ children, url }: ButtonProps) => {
  return (
    <button
      className="px-5 py-2 bg-primary text-white rounded-md font-medium"
      type="button"
      onClick={() => window.open(url)}
    >
      {children}
    </button>
  );
};

export default Button;
