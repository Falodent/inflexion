import networkCall from "@/config/network";
import { useQuery } from "@tanstack/react-query";

export const useAllExecutives = () => {
  return useQuery({
    queryKey: ["executives"],
    queryFn: () =>
      networkCall({
        url: "executives",
      }),
  });
};
