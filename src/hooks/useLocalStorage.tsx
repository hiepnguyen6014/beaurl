import React from "react";

type IUseLocalStorage = (
  key: string,
  initialValue: unknown
) => [unknown, (value: unknown) => boolean];

const useLocalStorage: IUseLocalStorage = (
  key: string,
  initialValue: unknown
) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);

      if (item !== null) {
        return JSON.parse(item);
      } else {
        return initialValue;
      }
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: unknown): boolean => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      return false;
    }
    return true;
  };
  return [storedValue, setValue];
};

export default useLocalStorage;
