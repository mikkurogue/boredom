"use client";

import React, { CSSProperties, useEffect, useRef } from "react";
import { init, getInstanceByDom } from "echarts";
import type { ECharts } from "echarts";

export type EchartProps = {
  option: any; // for now this is any until i figure out the actual typing from the lib EChartsOption is not it
  settings?: any; // unsure what this even is to be honest.
  style?: CSSProperties;
  loading?: boolean;
};

export default function Echart({
  option,
  settings,
  style,
  loading,
}: EchartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(function () {
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current);
    }

    function resize() {
      chart?.resize();
    }
    window.addEventListener("resize", resize);

    return function () {
      chart?.dispose();
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings, style]);

  useEffect(
    function () {
      if (chartRef.current !== null) {
        const chart = getInstanceByDom(chartRef.current);

        loading === true ? chart?.showLoading() : chart?.hideLoading();
      }
    },
    [loading],
  );

  // make sure we dont have self closing div tags at all
  // these are giga bad
  return (
    <div
      ref={chartRef}
      style={{
        width: "100%",
        height: "100px",
        ...style,
      }}
    ></div>
  );
}
