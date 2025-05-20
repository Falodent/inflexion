import Skeleton from "react-loading-skeleton";
import clsx from "clsx";

// components
import Circle from "@/components/circle";
import Stack from "@/components/stack";

const ContentSkeleton = () => {
  return (
    <Stack
      spacing={14}
      className={clsx(
        "w-full rounded-4xl border border-grey-600 !gap-2 !lg:gap-[14px]",
        "py-[26px] lg:pt-[30px] pb-8 pr-3 lg:pr-[35px] pl-3 lg:pl-4"
      )}
    >
      <div className="pl-[13px] lg:pl-[15px] flex flex-col items-start lg:flex-row lg:items-center gap-5">
        <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0">
          <Skeleton circle width="100%" height="100%" />
        </div>

        <Stack spacing={2} className="w-full">
          <div className="w-3/4">
            <Skeleton width="100%" height={24} />
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <div className="w-[15%]">
              <Skeleton width="100%" height={21} />
            </div>

            <Circle />

            <div className="w-[15%]">
              <Skeleton width="100%" height={21} />
            </div>

            <Circle />

            <div className="w-[15%]">
              <Skeleton width="100%" height={21} />
            </div>

            <Circle />

            <div className="w-[15%]">
              <Skeleton width="100%" height={21} />
            </div>
          </div>
        </Stack>
      </div>

      <h4 className="pl-[14px] w-full">
        <Skeleton width="100%" height={80} />
      </h4>

      <Stack spacing={4} className={clsx("pl-2 lg:px-4 mt-[3px] w-full")}>
        <Skeleton width="100%" height={20} count={2} />
      </Stack>

      <div className="w-full mt-[13px] pl-2 lg:pl-[15px]">
        <Skeleton width="100%" height={45} />
      </div>
    </Stack>
  );
};

export default ContentSkeleton;
