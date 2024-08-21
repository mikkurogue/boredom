import Bar from "@/components/charts/bar";
import BarPour from "@/components/charts/bar-pour";
import { fetchData } from "@/lib/fetchData";
import { generateSeriesData } from "@/lib/generate-series-data";
import React from "react";

export default async function Page() {
  // fetch the data here instead
  const data = await fetchData("https://dummyjson.com", "recipes");
  const { seriesData, labels } = generateSeriesData(
    data,
    "recipes",
    "name",
    "caloriesPerServing",
  );

  return (
    <div>
      {/*
        NOTE: in this way we process the data somehwere (like here above in the server component)
        and pour this into the component as props.
        All options should and will be defined within the BarPour component (for now named as such to demonstrate the strategy)
      */}
      <BarPour data={{ series: seriesData, labels: labels }} />

      {/*

        NOTE: in this way we make the Bar "smart" and give it the necessary tools to fetch the data itself.
        I believe this to be "slower" and more cumbersome as this means we need to provide much more
        in terms of props to get something running, where as above we can simply just feed it the data it needs.
      */}
      <Bar
        api={{
          url: "https://dummyjson.com",
          endpoint: "recipes",
        }}
        axis={{
          x: {
            type: "category",
          },
          y: {
            type: "value",
          },
        }}
      />
    </div>
  );
}
