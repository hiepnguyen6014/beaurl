import React from "react";
import styled from "@emotion/styled";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px;
`;

const MainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default MainLayout;
