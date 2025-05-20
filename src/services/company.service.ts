import networkCall from "@/config/network";
import { useQuery } from "@tanstack/react-query";

export const useAllCompanies = () => {
  return useQuery({
    queryKey: ["companies"],
    queryFn: () =>
      networkCall({
        url: "companies",
      }),
  });
};
