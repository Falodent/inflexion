import { ApiRequestParams } from "@/types/api";
import axiosInstance from "./axios";

const networkCall = async ({
  method = "GET",
  url,
  data = null,
  params = {},
  content_type = "application/json",
}: ApiRequestParams): Promise<any> => {
  const response = await axiosInstance({
    method,
    url,
    data,
    params,
    headers: {
      "Content-Type": content_type,
    },
  });

  return response.data;
};

export default networkCall;
