import { NextPageWithLayout } from "../_app";
import React from "react";
import AccountLayout from "~/components/layouts/AccountLayout";

const QrCode: NextPageWithLayout = () => {
  return <div>QR Code</div>;
};

QrCode.getLayout = (page) => <AccountLayout>{page}</AccountLayout>;

export default QrCode;
