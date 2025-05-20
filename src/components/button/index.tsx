import clsx from "clsx";

interface Props {
  type?: "button" | "submit";
  children: React.ReactNode;
  variant?: "filled" | "filledLight" | "border";
  size?: "sm" | "lg";
  disabled?: boolean;
  className?: string;
  handleClick?: () => void;
}

const Button = ({
  type = "button",
  children,
  variant = "filled",
  size = "lg",
  disabled,
  className,
  handleClick,
}: Props) => {
  const VARIANT = {
    filled:
      "bg-blue-100 text-white xl:text-xl font-[500] leading-none border-none outline-none",
    filledLight: "bg-[#f2f3f4] text-black-800 border-none outline-none",
    border: "bg-white text-[#214aa0] border border-[#F2F2F2]",
  };

  const SIZE = {
    sm: "h-12",
    lg: "h-12 xl:h-[57px]",
  };

  return (
    <button
      className={clsx(
        "w-full cursor-pointer rounded-4xl xl:rounded-[40px] font-helvetica-neue tracking-normal",
        VARIANT[variant],
        SIZE[size],
        className,
        disabled && "cursor-not-allowed"
      )}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
