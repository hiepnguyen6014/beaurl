import type { ShortenLink } from "~/interfaces";

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
