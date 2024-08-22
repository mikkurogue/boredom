type CubeJsFilter = {
  dimension: string;
  operator: string;
  values: string[];
};

type CubeJsQuery = {
  dimensions: string[];
  measures: string[];
  filters?: CubeJsFilter[];
};

type Result<T> = {
  result: T;
  loading: boolean;
  error: null | string;
};

const cubes = ["EmissionsShipments", "NOxEmissionsShipments"] as const;
type Cube = (typeof cubes)[number];

export type { CubeJsQuery, Result, CubeJsFilter, Cube };
