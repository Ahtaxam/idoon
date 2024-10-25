export type PaginationProps = {
  currentPage: number;
  totalResults: number;
  resultsPerPage: number;
};

export type Column = {
  label: string;
};

export type TableHeaderProps = {
  columns: Column[];
};
