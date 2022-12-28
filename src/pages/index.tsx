import React, { ReactElement, Suspense } from "react";
import type { NextPageWithLayout } from "./_app";
import dynamic from "next/dynamic";

import MainLayout from "~/components/layouts/MainLayout";
const HomeScreen = dynamic(async () => await import("~/components/pages/Home"));

const Home: NextPageWithLayout = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
          }}
        >
          Loading...
        </div>
      }
    >
      <HomeScreen />
    </Suspense>
  );
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
