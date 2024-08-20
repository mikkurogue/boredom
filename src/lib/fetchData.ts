async function fetchData(url: string, endpoint: string) {
  const result = await fetch(`${url}/${endpoint}`);

  const data = result.json();

  return data;
}

export { fetchData };
