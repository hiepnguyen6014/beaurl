const deleteHistory = (): void => {
  if (typeof localStorage === "undefined") {
    return;
  }

  localStorage.removeItem("shortenLinks");
};

export default deleteHistory;
