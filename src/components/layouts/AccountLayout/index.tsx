import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

const AccountLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AccountLayout;
