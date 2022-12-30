const saveUrlToLocal = async (url: string, path: string): Promise<void> => {
  if (typeof localStorage === "undefined") {
    return;
  }

  const data = {
    url,
    path,
    timestamp: new Date().getTime(),
  };

  const localData = localStorage.getItem("shortenLinks") ?? "[]";

  const parsedData = JSON.parse(localData);

  if (parsedData.length >= 3) {
    parsedData.shift();
  }

  parsedData.push(data);

  localStorage.setItem("shortenLinks", JSON.stringify(parsedData));
};

export default saveUrlToLocal;
