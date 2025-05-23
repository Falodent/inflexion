import { Fragment, useEffect, useState } from "react";
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
import { FullContentType } from "@/types/content";
import { useContentStore } from "@/store/useContentStore";
import Wrapper from "../wrapper";

const Library = ({ search }: { search: string }) => {
  const [debouncedSearch] = useDebounce(search, 500);

  const [executives, setExecutives] = useState<string[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);

  const { contents, clearContents, setOffset } = useContentStore();

  const { isLoading, fetchNextPage, hasNextPage } = useInfiniteContent({
    executive_names: executives.join(","),
    company_names: companies.join(","),
    search_term: debouncedSearch,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isLoading) {
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
  }, [fetchNextPage, hasNextPage, isLoading]);

  useEffect(() => {
    clearContents();
    setOffset(0);
  }, [executives, companies, clearContents, setOffset, debouncedSearch]);

  return (
    <Wrapper
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

            {!isLoading && contents?.length === 0 ? (
              <NoContent key="empty" />
            ) : (
              contents?.map((item: FullContentType, index: number) => (
                <Fragment key={item._id}>
                  <Content key={item._id} data={item} />

                  {(index + 1) % 5 === 0 && <Subscribe key={item._id} />}
                </Fragment>
              ))
            )}

            <div
              id="load-more-trigger"
              className={clsx("h-5", isLoading && "-mt-60 pb-50")}
            />

            {isLoading &&
              new Array(5)
                .fill({})
                .map((_, index) => <ContentSkeleton key={index} />)}
          </Stack>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

export default Library;
