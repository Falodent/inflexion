import networkCall from "@/config/network";
import { useContentStore } from "@/store/useContentStore";
import { ContentParams } from "@/types/api";
import { FullContentType } from "@/types/content";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useAllContentByExecutive = (params: ContentParams) => {
  return useQuery({
    queryKey: ["contents", { params }],
    queryFn: () =>
      networkCall({
        url: "contents",
        params: {
          limit: 30,
          ...params,
        },
      }),
  });
};

export const useInfiniteContent = (params: ContentParams) => {
  const { contents, setContents, offset, setOffset } = useContentStore();

  const query = useQuery({
    queryKey: ["contents", { params, offset }],
    queryFn: () =>
      networkCall({
        url: "contents",
        params: {
          limit: 5,
          offset,
          ...params,
        },
      }),
  });

  useEffect(() => {
    if (query.data?.data) {
      const newItems = query.data.data.filter(
        (item: FullContentType) => !contents.some((c) => c._id === item._id)
      );
      if (newItems.length > 0) {
        setContents([...contents, ...newItems]);
      }
    }
  }, [query.data, contents, setContents]);

  const hasNextPage =
    query.data?.data.length === 5 && !query.isFetching && !query.isLoading;

  const fetchNextPage = () => {
    if (hasNextPage) {
      setOffset(offset + 5);
    }
  };

  return {
    ...query,
    fetchNextPage,
    hasNextPage,
  };
};

// export const useInfiniteContent = (params: ContentParams) => {
//   return useInfiniteQuery({
//     queryKey: ["infinite-contents", params],
//     initialPageParam: 0,
//     queryFn: ({ pageParam = 0 }) =>
//       networkCall({
//         url: "contents",
//         params: {
//           limit: 5,
//           offset: pageParam,
//           ...params,
//         },
//       }),
//     getNextPageParam: (lastPage, pages) => {
//       if (lastPage.data.length < 5) return undefined;

//       return pages.length * 5;
//     },
//     staleTime: 1000 * 60 * 60,
//     refetchOnWindowFocus: false,
//     refetchOnMount: false,
//   });
// };

export const useSingleContent = (id: string | string[] | undefined) => {
  return useQuery({
    queryKey: ["single-content"],
    queryFn: () =>
      networkCall({
        url: `contents/${id}`,
      }),
    enabled: !!id,
    retry: 1,
  });
};
