import clsx from "clsx";
import Skeleton from "react-loading-skeleton";

// components
import Frame from "@/components/frame";
import Stack from "@/components/stack";

interface Props {
  isLoading: boolean;
  points: string[];
}

const KeyTakeaways = ({ isLoading, points = [] }: Props) => {
  return (
    <Frame title="Key Takeaways">
      <Stack spacing={10} className={clsx("px-2")}>
        {isLoading && (
          <Skeleton width="100%" height={32} count={3} className="mb-2" />
        )}

        {!isLoading && points.length < 1 && (
          <p className="text-lg md:text-xl text-black-600 leading-[18.8px]">
            n/a
          </p>
        )}

        {!isLoading &&
          points.map((item) => (
            <div
              className={clsx("flex items-start gap-2 text-black-700 relative")}
              key={item}
            >
              <div className="h-7 xl:h-8 flex items-center">
                <div className="w-1 h-1 bg-black-700 shrink-0" />
              </div>

              <p className="w-full text-lg md:text-xl font-[500] leading-[32px] tracking-[0.2px] text-black-700 align-middle">
                {item}
              </p>
            </div>
          ))}
      </Stack>
    </Frame>
  );
};

export default KeyTakeaways;
