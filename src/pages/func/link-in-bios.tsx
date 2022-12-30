import { NextPageWithLayout } from "../_app";
import React from "react";
import AccountLayout from "~/components/layouts/AccountLayout";

const LinkInBios: NextPageWithLayout = () => {
  return <div>Link in bios</div>;
};

LinkInBios.getLayout = (page) => <AccountLayout>{page}</AccountLayout>;

export default LinkInBios;
