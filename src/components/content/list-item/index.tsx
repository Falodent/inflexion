import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface Props {
  data: string[];
  index: number;
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
  text: string;
}

const ListItem = ({ index, isExpanded, setIsExpanded, data, text }: Props) => {
  return (
    <div
      className={clsx(
        "flex items-start gap-2 text-black-700 relative",
        index > 1 && !isExpanded && "hidden"
      )}
    >
      {index === 1 && !isExpanded && (
        <div className="absolute w-[65%] max-w-[275px] lg:max-w-[365px] h-[30px] top-0 left-0 text-gradient" />
      )}

      <div className="h-7 xl:h-8 flex items-center">
        <div className="w-1 h-1 bg-black-700 shrink-0" />
      </div>

      <div className="w-full flex items-center gap-2 lg:gap-[15px]">
        <p
          className={clsx(
            "lg:text-lg font-[500] leading-[26px] lg:leading-[30px] tracking-[0.2px]",
            index === 1 &&
              !isExpanded &&
              "w-[65%] max-w-[265px] lg:max-w-[355px] truncate"
          )}
        >
          {text}

          {index === data.length - 1 && isExpanded && (
            <span
              role="button"
              className="ml-[15px] h-[33px] lg:text-lg font-[500] leading-[33px] text-navy-300 cursor-pointer whitespace-nowrap"
              onClick={() => setIsExpanded(false)}
            >
              See Less
            </span>
          )}
        </p>

        {index === 1 && !isExpanded && (
          <div
            role="button"
            className="h-[33px] lg:text-lg font-[500] leading-[33px] text-navy-300 cursor-pointer whitespace-nowrap"
            onClick={() => setIsExpanded(true)}
          >
            See more
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
