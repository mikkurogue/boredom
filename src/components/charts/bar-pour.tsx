import { AxisOpts, DataStruct } from "@/lib/types/opts";
import Echart from "./Echart";
import { CSSProperties } from "react";

type BarPourProps = {
  data: DataStruct;
  options?: AxisOpts;
  style?: CSSProperties;
};

export default function BarPour({ data, options, style }: BarPourProps) {
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
