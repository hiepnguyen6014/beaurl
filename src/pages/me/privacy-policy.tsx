import React from "react";
import { NextPageWithLayout } from "../_app";

import MainLayout from "~/components/layouts/MainLayout";

const PrivacyPolicy: NextPageWithLayout = () => {
  return <section>PrivacyPolicy</section>;
};

PrivacyPolicy.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default PrivacyPolicy;
