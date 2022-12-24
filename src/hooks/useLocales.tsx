import React from "react";

import useLocalStorage from "./useLocalStorage";

import locales from "../locales";

const DEFAULT_LOCALE = "en";
const LOCALE_KEY = "lang";

interface Locales {
  local: string;
  setLocal: (local: string) => void;
  locales: object;
}

export const LocalesContext = React.createContext<Locales>({
  local: DEFAULT_LOCALE,
  setLocal: () => locales.vi,
  locales: locales.vi,
});

export const LocalesProvider: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const [local, setLocal] = useLocalStorage(LOCALE_KEY, DEFAULT_LOCALE);

  const value: Locales = React.useMemo(
    () => ({
      local: local as string,
      setLocal,
      locales: locales[local as keyof typeof locales],
    }),
    [local, setLocal]
  );

  return (
    <LocalesContext.Provider value={value}>{children}</LocalesContext.Provider>
  );
};

export const useLocales: (key: string) => string = (key: string) => {
  const { locales } = React.useContext(LocalesContext);
  const [language, setLanguage] = React.useState<object>({});

  React.useEffect(() => {
    setLanguage(locales);
  }, [locales]);

  return language[key as keyof typeof language];
};
