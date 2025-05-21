import Skeleton from "react-loading-skeleton";

// components
import Frame from "@/components/frame";

interface Props {
  isLoading: boolean;
  keywords: string[];
}

const Keywords = ({ isLoading, keywords = [] }: Props) => {
  return (
    <Frame title="KEYWORDS">
      <section className="flex flex-wrap gap-2 items-center">
        {isLoading &&
          new Array(4).fill({}).map((_, index) => (
            <div className="w-[20%]" key={index}>
              <Skeleton width="100%" height={32} borderRadius={32} />
            </div>
          ))}

        {!isLoading && keywords?.length < 1 && (
          <p className="text-lg md:text-xl text-black-600 leading-[18.8px]">
            n/a
          </p>
        )}

        {!isLoading &&
          keywords?.map((item) => (
            <div
              key={item}
              className="capitalize h-8 font-[500] leading-[21.8px] text-dark-100 px-4 py-[5px] border border-ash-500 rounded-[44px] align-middle"
            >
              {item}
            </div>
          ))}
      </section>
    </Frame>
  );
};

export default Keywords;
