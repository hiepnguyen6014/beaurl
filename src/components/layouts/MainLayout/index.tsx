import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Header showNav />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
