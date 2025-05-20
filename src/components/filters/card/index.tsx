import clsx from "clsx";

// components
import { StaticImage } from "@/components/image";

interface Props {
  active: string[];
  text: string;
  handleAdd: (text: string) => void;
  handleRemove: (text: string) => void;
}

const FilterCard = ({ active, text, handleAdd, handleRemove }: Props) => {
  const isActive = active.includes(text);

  return (
    <div
      className={clsx(
        "h-[42px] px-2 sm:px-[13px] rounded-[44px] shrink-0 flex items-center justify-center gap-1 transition-all ease-in-out duration-300 sm:mb-2",
        isActive
          ? "bg-navy-100 text-white cursor-default"
          : "border border-grey-400 text-black-500 hover:bg-grey-500"
      )}
    >
      <button
        className="cursor-pointer"
        onClick={() => handleAdd(text)}
        disabled={isActive}
      >
        <p className="text-sm sm:text-base font-[500] leading-[21.8px]">
          {text}
        </p>
      </button>

      {isActive && (
        <div
          role="button"
          className="cursor-pointer"
          onClick={() => handleRemove(text)}
        >
          <StaticImage src="svg/close.svg" alt="X" width={20} height={20} />
        </div>
      )}
    </div>
  );
};

export default FilterCard;
