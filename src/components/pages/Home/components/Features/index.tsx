import { Unstable_Grid2 as Grid } from "@mui/material";
import React from "react";
import type { NextPage } from "next";

import { Section, Container, CenterTitle, SubTitle, TitleGroup } from "../../HomeStyled";
import { useLocales } from "~/hooks/useLocales";
import FeaturesCard from "../FeaturesCard";
import shortenLinkIcon from "~/assets/add-hyperlink-icon.svg";
import grCodeIcon from "~/assets/qr-code-icon.svg";
import biosIcon from "~/assets/proposal-icon.svg";

const Features: NextPage = () => {
  return (
    <Section id="features">
      <Container>
        <TitleGroup>
          <CenterTitle>{useLocales("global.features")}</CenterTitle>
          <SubTitle> {useLocales("global.featuresDesc")}</SubTitle>
        </TitleGroup>
        <Grid container spacing={1} margin={0} padding={1}>
          <Grid md={4} xs={12} justifyContent={"center"} display={"flex"}>
            <FeaturesCard
              title={"features.features1"}
              desc={"features.features1Desc"}
              icon={shortenLinkIcon}
              features={["features.features11", "features.features12", "features.features13", "features.features14"]}
            />
          </Grid>
          <Grid md={4} xs={12} justifyContent={"center"} display={"flex"}>
            <FeaturesCard
              title={"features.features2"}
              desc={"features.features2Desc"}
              icon={grCodeIcon}
              features={["features.features21", "features.features22", "features.features23", "features.features24"]}
            />
          </Grid>
          <Grid md={4} xs={12} justifyContent={"center"} display={"flex"}>
            <FeaturesCard
              title={"features.features3"}
              desc={"features.features3Desc"}
              icon={biosIcon}
              features={["features.features31", "features.features32", "features.features33", "features.features34"]}
            />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
