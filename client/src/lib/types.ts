export interface ExportOptions {
  format: 'csv' | 'excel' | 'pdf';
  dateRange?: {
    start: Date;
    end: Date;
  };
  filters?: {
    category?: string;
    supplier?: string;
    status?: string;
  };
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    borderWidth?: number;
  }[];
}

export interface PaginationOptions {
  page: number;
  limit: number;
  total: number;
}

export interface SortOptions {
  field: string;
  direction: 'asc' | 'desc';
}

export interface FilterOptions {
  search?: string;
  category?: string;
  supplier?: string;
  status?: string;
  stockStatus?: 'critical' | 'low' | 'normal';
}
