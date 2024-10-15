import { EChartsOption } from "echarts";
import { AxisOpts, DataStruct } from "./types/opts";

export function defaultBarSeriesOptions(
  axisOpts: AxisOpts | undefined,
  data: DataStruct,
): EChartsOption {
  return {
    xAxis: {
      type: axisOpts?.x?.type ? axisOpts?.x?.type : "category",
      data: data.labels,
    },
    yAxis: {
      type: axisOpts?.y?.type ? axisOpts?.y?.type : "value",
    },
    series: [
      {
        data: data.series,
        type: "bar",
      },
    ],
  };
}
