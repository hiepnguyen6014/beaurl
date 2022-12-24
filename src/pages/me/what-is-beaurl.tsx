import React, { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";

import MainLayout from "~/components/layouts/MainLayout";

const Beaurl: NextPageWithLayout = () => {
  return <section>What is beaurl?</section>;
};

Beaurl.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Beaurl;
