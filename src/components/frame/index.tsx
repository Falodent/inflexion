import clsx from "clsx";
import Stack from "../stack";

interface Props {
  title: string;
  children: React.ReactNode;
  hasBorder?: boolean;
}

const Frame = ({ title, children, hasBorder = true }: Props) => {
  return (
    <Stack
      spacing={24}
      className={clsx(
        "w-full pb-12 md:pb-[62px] ",
        hasBorder && "border-b border-ash-400"
      )}
    >
      <h4 className="text-xl font-[700] leading-[30px] text-navy-300 tracking-[0.5px] uppercase align-middle">
        {title}
      </h4>

      {children}
    </Stack>
  );
};

export default Frame;
