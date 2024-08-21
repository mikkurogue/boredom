async function fetchData<T>(url: string, endpoint: string) {
  const result = await fetch(`${url}/${endpoint}`);

  const data = result.json();

  return data as T;
}

export { fetchData };
