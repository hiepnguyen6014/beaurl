import { Unstable_Grid2 as Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import type { NextPage } from "next";

import heroSvg from "~/assets/hero.png";
import { useLocales } from "~/hooks/useLocales";

import { Section, Container, Title } from "../../HomeStyled";
import { ButtonShortenLink, ButtonCopyLink, Notify, Spinner, ShortenLinkContainer, ShortenLinkInput, HeroImage } from "./ToolsStyled";

const LINK_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g;

const Tools: NextPage = () => {
  const [copy, setCopy] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [notify, setNotify] = useState<boolean>(false);

  const shortenLinkInput = useRef<HTMLInputElement>(null);

  const copyText = useLocales("global.copy");
  const shortenLinkText = useLocales("global.shorten");

  const handleShortenLink = (): void => {
    const link = shortenLinkInput.current?.value;

    if (!link?.match(LINK_REGEX)) {
      setNotify(true);
      return;
    }

    setNotify(false);
    setLoading(true);

    // fake call api
    setTimeout(() => {
      setLoading(false);
      setCopy(true);

      const input = shortenLinkInput.current as HTMLInputElement;
      if (input) {
        input.value = "https://beaurl.store/daihiep";
      }
    }, 2000);
  };

  const handleCopyClick = async (): Promise<void> => {
    const input = shortenLinkInput.current as HTMLInputElement;
    if (input) {
      await navigator.clipboard.writeText(input.value);
    }

    return await Promise.resolve();
  };

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
              <ShortenLinkInput
                ref={shortenLinkInput}
                placeholder={useLocales("global.longLink")}
                aria-label="input-link"
                onChange={() => setNotify(false)}
              />
              {!copy ? (
                <ButtonShortenLink onClick={() => handleShortenLink()} aria-label="button-shorten">
                  {loading && <Spinner />}
                  {shortenLinkText}
                </ButtonShortenLink>
              ) : (
                <ButtonCopyLink onClick={async () => await handleCopyClick()} aria-label="copy-button">
                  {copyText}
                </ButtonCopyLink>
              )}
            </ShortenLinkContainer>
            <Notify notify={notify}>{useLocales("global.invalid")}</Notify>
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
