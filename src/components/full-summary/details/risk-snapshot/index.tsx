import clsx from "clsx";
import Skeleton from "react-loading-skeleton";

// components
import Stack from "@/components/stack";

// types
import { ToneAndRiskData } from "@/types/content";

interface Props {
  isLoading: boolean;
  risk: ToneAndRiskData | null;
}

const RiskSnapshot = ({ isLoading, risk }: Props) => {
  return (
    <Stack spacing={24} className="w-full">
      <h4 className="text-xl font-[700] leading-[32px] text-black">
        Tone & Risk Snapshot
      </h4>

      {isLoading ? (
        <div className="w-1/2">
          <Skeleton width="100%" height={18} />
        </div>
      ) : (
        <p className="text-xl font-[500] leading-[18px] text-black-600">
          Sentiment: {risk?.sentiment ?? "n/a"}
        </p>
      )}

      <Stack spacing={25} className="w-full mt-2">
        <p className="text-xl font-[500] leading-[18px] text-black-600">
          Risks flagged:
        </p>

        <Stack spacing={10} className={clsx("px-1")}>
          {isLoading && (
            <Skeleton width="100%" height={32} count={3} className="mb-2" />
          )}

          {!isLoading && !risk?.risks && (
            <p className="text-lg md:text-xl text-black-600 leading-[18.8px]">
              n/a
            </p>
          )}

          {!isLoading &&
            risk?.risks.map((item) => (
              <div
                className={clsx(
                  "flex items-start gap-2 text-black-700 relative"
                )}
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
      </Stack>
    </Stack>
  );
};

export default RiskSnapshot;
