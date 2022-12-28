import { Unstable_Grid2 as Grid } from "@mui/material";
import React from "react";
import type { NextPage } from "next";

import heroSvg from "~/assets/hero.png";
import { useLocales } from "~/hooks/useLocales";

import {
  Section,
  Container,
  HeroImage,
  Title,
  ShortenLinkContainer,
  ShortenLinkInput,
  ButtonShortenLink,
  ButtonCopyLink,
} from "../../HomeStyled";

const Tools: NextPage = () => {
  return (
    <Section>
      <Container>
        <Grid container spacing={1} margin={0} padding={1}>
          <Grid
            md={6}
            xs={12}
            order={{
              xs: 2,
              md: 1,
            }}
          >
            <Title>{useLocales("global.title")}</Title>
            <ShortenLinkContainer>
              <ShortenLinkInput placeholder={useLocales("global.longLink")} aria-label="input-link" />
              <ButtonShortenLink aria-label="button-shorten">{useLocales("global.shorten")}</ButtonShortenLink>
              <ButtonCopyLink aria-label="copy-button">{useLocales("global.copy")}</ButtonCopyLink>
            </ShortenLinkContainer>
          </Grid>
          <Grid
            md={6}
            xs={12}
            order={{
              xs: 1,
              md: 2,
            }}
          >
            <HeroImage src={heroSvg} alt="hero-image" priority />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Tools;
