import React from "react";
import type { NextPage } from "next";

import Tools from "./components/Tools";
import Features from "./components/Features";
import { Main } from "./HomeStyled";

const HomePage: NextPage = () => {
  return (
    <Main>
      <Tools />
      <Features />
    </Main>
  );
};

export default HomePage;
