import Skeleton from "react-loading-skeleton";
import clsx from "clsx";

// components
import Frame from "@/components/frame";
import Stack from "@/components/stack";

// types
import { TOCData } from "@/types/content";

interface Props {
  isLoading: boolean;
  toc: TOCData[];
}

const TableOfContents = ({ isLoading, toc }: Props) => {
  return (
    <Frame title="Table of Contents" hasBorder={false}>
      <Stack spacing={16} className={clsx("px-1")}>
        {isLoading && (
          <Skeleton width="100%" height={32} count={4} className="mb-2" />
        )}

        {!isLoading && toc.length < 1 && (
          <p className="text-lg md:text-xl text-black-600 leading-[18.8px]">
            n/a
          </p>
        )}

        {!isLoading &&
          toc.map((item, index) => (
            <div
              className={clsx("flex items-start gap-2 relative")}
              key={index}
            >
              <div className="h-7 xl:h-8 flex items-center">
                <div className="w-1 h-1 bg-navy-300 shrink-0" />
              </div>

              <p className="w-full text-lg md:text-xl font-[500] leading-[30px] tracking-[0.2px] text-black-700 align-middle">
                <span className="text-navy-300">[{item.timestamp}]</span>{" "}
                {item.content}
              </p>
            </div>
          ))}
      </Stack>
    </Frame>
  );
};

export default TableOfContents;
