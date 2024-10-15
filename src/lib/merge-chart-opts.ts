import {
  EChartsOption,
  EChartsSeriesType,
  ToolboxComponentOption,
} from "echarts";
import _ from "lodash";

const _TOOLBOX: ToolboxComponentOption = {
  feature: {
    saveAsImage: {
      show: false,
    },
    restore: {
      show: false,
    },
    dataView: {
      show: false,
    },
    dataZoom: {
      show: false,
    },
    magicType: {
      show: false,
    },
    brush: {
      show: false,
    },
  },
};

const _DEFAULT_OPTIONS: EChartsOption = {
  tooltip: {
    show: true,
  },
  xAxis: {
    nameGap: 5,
    nameRotate: 45,
  },
  toolbox: _TOOLBOX,
  darkMode: false,
};

/*
 * Function to merge the chart options with some default options
 */
export default function mergeChartOptions(
  _chartType: EChartsSeriesType,
  opts: EChartsOption | undefined,
  deepOpts?: EChartsOption,
): EChartsOption {
  if (opts && deepOpts) return _.merge({}, _DEFAULT_OPTIONS, opts, deepOpts);

  if (opts && !deepOpts) return _.merge({}, _DEFAULT_OPTIONS, opts);

  // defaut case, just return the basic options we define above - wont contain series data
  return _DEFAULT_OPTIONS;
}
