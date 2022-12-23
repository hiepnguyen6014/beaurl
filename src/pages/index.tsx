import React, { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import MainLayout from "~/components/layouts/MainLayout";

const Home: NextPageWithLayout = () => {
  return <>s</>;
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
