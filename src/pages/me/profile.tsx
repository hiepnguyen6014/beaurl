import React from "react";
import type { NextPageWithLayout } from "~/pages/_app";

import AccountLayout from "~/components/layouts/AccountLayout";

const Profile: NextPageWithLayout = () => {
  return <div>Profile</div>;
};

Profile.getLayout = (page) => <AccountLayout>{page}</AccountLayout>;

export default Profile;
