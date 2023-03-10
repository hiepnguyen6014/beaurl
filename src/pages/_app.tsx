import React, { ReactElement, ReactNode } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import type { NextPage } from "next/types";

import { LocalesProvider } from "~/hooks/useLocales";
import "./index.css";
import { AuthProvider } from "~/hooks/useAuth";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="shorten link, beaurl, shorten, daihiep, rut gon link" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="hiepnguyen6014" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./images/preview.jpg" />
        <meta property="og:url" content="https://beaurl.store" />
        <title>Beaurl - Short URLs & Custom Free Link Shortener</title>
        <meta name="title" content="Beaurl URL Shortener - Short URLs & Custom Free Link Shortener | Beaurl" />
        <meta
          name="description"
          content="Beaurl's Connections Platform is more than a free URL shortener, with robust link management software, advanced QR Code features, and a Link-in-bio solution."
        />
        <meta property="og:title" content="Beaurl URL Shortener - Short URLs & Custom Free Link Shortener | Beaurl" />
        <meta
          property="og:description"
          content="Beaurl's Connections Platform is more than a free URL shortener, with robust link management software, advanced QR Code features, and a Link-in-bio solution."
        />
        <link rel="icon" href="./images/favicon.ico" />
      </Head>
      <LocalesProvider>
        <AuthProvider>
          <>{getLayout(<Component {...pageProps} />)}</>
        </AuthProvider>
      </LocalesProvider>
    </>
  );
};

export default App;
