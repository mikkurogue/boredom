type ApiOpts = {
  url: string;
  endpoint: string;
  body?: {
    [K: string]: {
      [K: string]: string | number | { [J: string]: string | number };
    };
  };
};

type AxisType = "category" | "value";

type AxisOpts = {
  x: {
    type?: AxisType;
    labels?: string[];
  };
  y: {
    type?: AxisType;
    labels?: string[];
  };
};

type DataStruct = {
  series: any[];
  labels: string[];
};

type SeriesStruct = string[] | number[];

export type { ApiOpts, AxisOpts, AxisType, DataStruct, SeriesStruct };
