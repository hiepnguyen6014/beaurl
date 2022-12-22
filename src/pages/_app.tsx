import React from "react";
import type { AppProps } from "next/app";

import GlobalStyles from "~/styles/GlobalStyles";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
