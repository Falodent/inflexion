import { useEffect, useState } from "react";
import clsx from "clsx";
import { useDebounce } from "use-debounce";

// components
import Content from "@/components/content";
import Filters from "@/components/filters";
import Stack from "@/components/stack";
import ContentSkeleton from "@/components/content/skeleton";
import Subscribe from "@/components/subscribe";
import NoContent from "@/components/content/no-content";

// services
import { useInfiniteContent } from "@/services/content.service";

// types
import { ContentType } from "@/types/content";

const Library = ({ search }: { search: string }) => {
  const [debouncedSearch] = useDebounce(search, 500);

  const [executives, setExecutives] = useState<string[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteContent({
      executive_names: executives.join(","),
      company_names: companies.join(","),
      search_term: debouncedSearch,
    });

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
        "w-full rounded-[28px] mt-[12px]",
        "bg-white lg:bg-grey-300",
        "pt-[82px] lg:pt-[70px] pb-[140px] lg:pb-[188px]"
      )}
    >
      <Stack
        spacing={58}
        className="mx-auto w-[95%] max-w-[400px] sm:max-w-[520px] lg:max-w-[700px] items-center"
      >
        <h1
          className={clsx(
            "font-[950] text-center uppercase lg:tracking-[0.1px] text-black-400",
            "text-[32px] sm:text-[40px] lg:text-[56px] leading-[44px] lg:leading-[64px]"
          )}
        >
          Every word spoken. By top AI execs
        </h1>

        <Stack spacing={40} className="w-full">
          <Filters
            activeExecutives={executives}
            setActiveExecutives={setExecutives}
            activeCompanies={companies}
            setActiveCompanies={setCompanies}
          />

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
                page.data.map((item: ContentType, index: number) => (
                  <>
                    <Content key={item.id} data={item} />

                    {(index + 1) % 5 === 0 && <Subscribe key={item.id} />}
                  </>
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
      </Stack>
    </div>
  );
};

export default Library;
