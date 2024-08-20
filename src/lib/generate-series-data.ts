export function generateSeriesData(
  data: any,
  key: string,
  dimension: string,
  measure: string,
): { seriesData: any[]; labels: any[] } {
  if (data.length === 0) {
    console.info("no data provided in given data structure");
    return {
      seriesData: [],
      labels: [],
    };
  }

  const gen_d = data[key].map(function (item: any) {
    return item[measure];
  });

  const gen_l = data[key].map(function (item: any) {
    return item[dimension];
  });

  return {
    seriesData: gen_d,
    labels: gen_l,
  };
}
