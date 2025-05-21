import clsx from "clsx";
import Skeleton from "react-loading-skeleton";

// components
import Stack from "@/components/stack";

// types
import { PunchQuote } from "@/types/content";

interface Props {
  isLoading: boolean;
  quotes: PunchQuote[];
}

const PunchQuotes = ({ isLoading, quotes }: Props) => {
  return (
    <Stack spacing={28} className="w-full">
      <h4 className="text-xl font-[700] leading-[32px] text-black">
        Punch Quotes
      </h4>

      <Stack spacing={11} className={clsx("px-1")}>
        {isLoading && (
          <Skeleton width="100%" height={32} count={4} className="mb-2" />
        )}

        {!isLoading && quotes?.length < 1 && (
          <p className="text-lg md:text-xl text-black-600 leading-[18.8px]">
            n/a
          </p>
        )}

        {!isLoading &&
          quotes.map((item) => (
            <div
              className={clsx("flex items-start gap-2 relative")}
              key={item.timestamp}
            >
              <div className="h-7 xl:h-8 flex items-center">
                <div className="w-1 h-1 bg-black-700 shrink-0" />
              </div>

              <p className="w-full text-lg md:text-xl font-[500] leading-[32px] tracking-[0.2px] text-black-700 align-middle">
                [{item.timestamp}] - {item.quote}
              </p>
            </div>
          ))}
      </Stack>
    </Stack>
  );
};

export default PunchQuotes;
