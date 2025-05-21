export interface FullContentType {
  author: string;
  company_name: string;
  content_validity: string;
  created_at: string;
  created_date: string;
  description: string;
  executive_name: string;
  file_path: string;
  investor_note: string;
  keywords: string[];
  published: boolean;
  published_date: string;
  source: string;
  source_url: string;
  status: any;
  thumbnail_url: string;
  title: string;
  total_cost: number[];
  transcript: string;
  updated_at: string;
  updated_date: string;
  video_id: string;
  _id: string;
}

export interface TOCData {
  timestamp: string;
  content: string;
}

export interface ToneAndRiskData {
  sentiment: string;
  risks: string[];
}

export interface PunchQuote {
  timestamp: string;
  quote: string;
}

export interface CatalystEvent {
  date: string;
  event: string;
}

export interface KPITable {
  headers: string[];
  rows: string[][];
}
