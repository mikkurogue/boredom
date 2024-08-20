import { fetchData } from "@/lib/fetchData";
import React, { CSSProperties } from "react";
import Echart from "./Echart";
import { ApiOpts, AxisOpts } from "@/lib/types/opts";
import { generateSeriesData } from "@/lib/generate-series-data";

type BarProps = {
  api: ApiOpts;
  axis: AxisOpts;
  style?: CSSProperties;
};

export default async function Bar({ api, axis, style }: BarProps) {
  // const data = await fetchData("https://dummyjson.com", "carts");
  const data = await fetchData(api.url, api.endpoint);

  console.log(data);
  const { seriesData, labels } = generateSeriesData(
    data,
    "recipes",
    "name",
    "caloriesPerServing",
  );

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
          type: axis.x.type,
          data: labels,
          nameGap: 5,
          nameRotate: 45,
        },
        yAxis: {
          type: axis.y.type,
        },
        series: [
          {
            data: seriesData,
            type: "bar",
          },
        ],
      }}
    />
  );
}
