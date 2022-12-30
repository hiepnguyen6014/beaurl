interface ShortenLink {
  path: string;
  timestamp: number;
  url: string;
}

const getHistory = (): ShortenLink[] => {
  if (typeof localStorage === "undefined") {
    return [];
  }
  const localData = localStorage.getItem("shortenLinks") ?? "[]";
  const parsedData = JSON.parse(localData);
  parsedData.reverse();
  return parsedData;
};

export default getHistory;
