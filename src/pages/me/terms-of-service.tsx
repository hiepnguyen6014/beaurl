import React from "react";
import { NextPageWithLayout } from "../_app";

import MainLayout from "~/components/layouts/MainLayout";

const TermsOfService: NextPageWithLayout = () => {
  return <section>Terms Of Service</section>;
};

TermsOfService.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default TermsOfService;
