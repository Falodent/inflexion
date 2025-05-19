import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

interface Props {
  showAll: boolean;
  setShowAll: Dispatch<SetStateAction<boolean>>;
}

const Expand = ({ showAll, setShowAll }: Props) => {
  return (
    <button
      className="w-[42px] h-[42px] flex border border-grey-400 hover:bg-grey-500 transition-all ease-in-out duration-300 items-center justify-center rounded-[44px] cursor-pointer"
      onClick={() => setShowAll((prev) => !prev)}
    >
      <div
        className={clsx(
          "text-black-500 transition-all duration-500",
          showAll ? "rotate-180" : "rotate-0"
        )}
      >
        <ChevronDown size={24} />
      </div>
    </button>
  );
};

export default Expand;
