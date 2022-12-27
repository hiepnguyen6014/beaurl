import React from "react";
import { NextPageWithLayout } from "../_app";

import MainLayout from "~/components/layouts/MainLayout";

const PaymentMethod: NextPageWithLayout = () => {
  return <section>Payment Method</section>;
};

PaymentMethod.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default PaymentMethod;
