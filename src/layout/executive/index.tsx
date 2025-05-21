"use client";

import clsx from "clsx";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { useDebounce } from "use-debounce";

// components
import Back from "@/components/back";
import Circle from "@/components/circle";
import Content from "@/components/content";
import Stack from "@/components/stack";
import ContentSkeleton from "@/components/content/skeleton";
import NoContent from "@/components/content/no-content";
import Subscribe from "@/components/subscribe";

// services
import { useInfiniteContent } from "@/services/content.service";

// types
import { FullContentType } from "@/types/content";

const Executive = ({ search }: { search: string }) => {
  const { query } = useRouter();
  const { name, company } = query;

  // search
  const [debouncedSearch] = useDebounce(search, 500);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteContent({
      executive_names: String(name),
      search_term: debouncedSearch,
    });

  useEffect(() => {
    if (!name) {
      history.back();
    }
  }, [name]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    const target = document.getElementById("load-more-trigger");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div
      className={clsx(
        "w-full rounded-[28px] mt-[20px] relative",
        "bg-white lg:bg-grey-300",
        "pt-[46px] lg:pt-[54px] pb-[45px]"
      )}
    >
      <div className="mx-auto w-[95%] mb-[22px] lg:absolute lg:top-[54px] lg:left-[37px]">
        <Back />
      </div>

      <Stack
        spacing={47}
        className="mx-auto w-[95%] max-w-[400px] sm:max-w-[520px] lg:max-w-[700px] items-center"
      >
        <Stack spacing={21} className="w-full">
          <h3 className="text-[36px] leading-[40px] font-[700] tracking-[0.1px] text-black">
            {name}
          </h3>

          <div className="flex items-center gap-[17px] text-navy-300">
            <p className="text-xl leading-[26px] font-[500]">
              {company || "No company"}
            </p>

            <Circle />

            <div className="h-6 px-[9px] bg-grey-800 rounded-[50px]">
              <p className="text-sm font-[500] leading-[26px] text-black-600">
                {data?.pages.flatMap((page) => page.data).length || 0} Talks
              </p>
            </div>
          </div>
        </Stack>

        <Stack spacing={32} className="w-full">
          {isLoading &&
            new Array(5)
              .fill({})
              .map((_, index) => <ContentSkeleton key={index} />)}

          {!isLoading &&
          data?.pages.flatMap((page) => page.data).length === 0 ? (
            <NoContent />
          ) : (
            data?.pages.map((page) =>
              page.data.map((item: FullContentType, index: number) => (
                <Fragment key={item._id}>
                  <Content key={item._id} data={item} isSubpage />

                  {(index + 1) % 5 === 0 && <Subscribe key={item._id} />}
                </Fragment>
              ))
            )
          )}

          <div id="load-more-trigger" className="h-5" />

          {isFetchingNextPage &&
            new Array(5)
              .fill({})
              .map((_, index) => <ContentSkeleton key={index} />)}
        </Stack>
      </Stack>
    </div>
  );
};

export default Executive;
