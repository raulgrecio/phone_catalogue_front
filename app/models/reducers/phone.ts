export interface IPhonesState<T> {
  results: T[];
  hasMore?: boolean;
  totalResults: number;
  page: number;
  totalPages: number;
  isFetching: boolean;
}
