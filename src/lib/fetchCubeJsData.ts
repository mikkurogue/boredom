import { auth } from "@/auth";
import { CubeJsFilter, CubeJsQuery, Result } from "./types/cubejs-query";

async function fetchCubeJsData<T>(
  cube: string,
  dimensions: string[],
  measures: string[],
  filters?: CubeJsFilter,
): Promise<Result<T>> {
  const query: CubeJsQuery = {
    dimensions: dimensions.map((dimension) => `${cube}.${dimension}`),
    measures: measures.map((measure) => `${cube}.${measure}`, filters),
  };

  // Auth from next-auth should contain our access token
  const session: any = await auth();

  let result: Result<T> = {
    result: [] as T,
    loading: true,
    error: null,
  };

  try {
    const url = new URL("http://localhost:4000/cubejs-api/v1/load");
    const params = { query: JSON.stringify(query) };
    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();
    const normalised = removePrefix<T>(cube, data);

    result = {
      result: normalised,
      loading: false,
      error: null,
    };
  } catch (error) {
    console.error(`Failed to fetch data: \n ${error}`);
    result = {
      result: [] as T,
      loading: false,
      error: (error as Error).message,
    };
  }
  return result;
}

function removePrefix<T>(prefix: string, data: any): T {
  return data.data.map((item: any) => {
    const transformed: any = {};

    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        const newKey = key.replace(`${prefix}.`, "");
        transformed[newKey] = item[key];
      }
    }
    return transformed as T;
  });
}

export { fetchCubeJsData };
