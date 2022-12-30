import React from "react";
import { NextPageWithLayout } from "../_app";

import AccountLayout from "~/components/layouts/AccountLayout";

const Payment: NextPageWithLayout = () => {
  return <div>Payment</div>;
};

Payment.getLayout = (page) => <AccountLayout>{page}</AccountLayout>;

export default Payment;
