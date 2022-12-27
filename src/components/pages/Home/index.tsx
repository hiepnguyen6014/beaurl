import React from "react";
import type { NextPage } from "next";
import { Divider } from "@mui/material";

import Tools from "./components/Tools";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import { Main } from "./HomeStyled";

const HomePage: NextPage = () => {
  return (
    <Main>
      <Tools />
      <Divider />
      <Features />
      <Divider />
      <Pricing />
      <Divider />
      <FAQ />
    </Main>
  );
};

export default HomePage;
