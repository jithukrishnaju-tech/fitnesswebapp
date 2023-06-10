export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "516a7e20bbmsh9bfaa2e29fbcca7p155931jsn982bfa2195bf",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
