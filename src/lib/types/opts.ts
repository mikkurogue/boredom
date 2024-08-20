type ApiOpts = {
  url: string;
  endpoint: string;
  body?: { [K: string]: any };
};

type AxisType = "category" | "value";

type AxisOpts = {
  x: {
    type: AxisType;
    labels?: string[];
  };
  y: {
    type: AxisType;
    labels?: string[];
  };
};

export type { ApiOpts, AxisOpts, AxisType };
