import { AxisOpts, DataStruct } from "@/lib/types/opts";
import Echart from "./Echart";
import { CSSProperties } from "react";

type BarPourProps = {
  data: DataStruct;
  options?: AxisOpts;
  style?: CSSProperties;
};

export default function BarPour({ data, options, style }: BarPourProps) {
  // NOTE: here we just have a simple wrapper for our echart component. As all echarts charts have the same base
  // we can use it to share functionality (like rendering, events etc) as an abstraction
  // this current component is meant to only be the bow ontop making the Echart component render the chart that we need
  // meaning, these types of components should do absolutely NOTHING as we pour all the data into it
  // The only thing this component does is render the chart with some default options for the chart options required
  // in this instance it is for a typical normal Bar chart.

  return (
    <Echart
      style={{
        height: "250px",
        ...style,
      }}
      option={{
        tooltip: {
          show: true,
        },
        xAxis: {
          type: options?.x?.type ? options?.x?.type : "category",
          data: data.labels,
          nameGap: 5,
          nameRotate: 45,
        },
        yAxis: {
          type: options?.y?.type ? options?.y?.type : "value",
        },
        series: [
          {
            data: data.series,
            type: "bar",
          },
        ],
      }}
    />
  );
}
