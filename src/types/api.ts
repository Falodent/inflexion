export interface ApiRequestParams {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  url: string;
  data?: any;
  params?: Record<string, any>;
  requireToken?: boolean;
  content_type?: string;
}

export interface ContentParams {
  page?: number;
  limit?: number;
  executive_names?: string;
  company_names?: string;
  search_term?: string;
}
