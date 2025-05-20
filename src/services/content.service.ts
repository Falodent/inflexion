import networkCall from "@/config/network";
import { ContentParams } from "@/types/api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useAllContent = (params: ContentParams) => {
  return useQuery({
    queryKey: ["contents", { params }],
    queryFn: () =>
      networkCall({
        url: "contents",
        params: {
          limit: 10,
          ...params,
        },
      }),
  });
};

export const useInfiniteContent = (params: ContentParams) => {
  return useInfiniteQuery({
    queryKey: ["infinite-contents", params],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) =>
      networkCall({
        url: "contents",
        params: {
          limit: 5,
          offset: pageParam,
          ...params,
        },
      }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.data.length < 5) return undefined;

      return pages.length * 5;
    },
  });
};
