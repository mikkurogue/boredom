import Bar from "@/components/charts/bar";
import React from "react";

export default function Page() {
  return (
    <div>
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
