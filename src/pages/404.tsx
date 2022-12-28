import React from "react";
import type { NextPageWithLayout } from "./_app";

import Page404Screen from "~/components/pages/404";
import MainLayout from "~/components/layouts/MainLayout";

const Page404: NextPageWithLayout = () => <Page404Screen />;

Page404.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Page404;
