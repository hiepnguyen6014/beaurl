import React, { useRef, useState, useId } from "react";
import type { NextPage } from "next";
import QRCode from "react-qr-code";
import { Download, ContentCopy, ArrowOutward, DeleteForever } from "@mui/icons-material";
import {
  Unstable_Grid2 as Grid,
  Drawer,
  Button,
  ButtonGroup,
  Select,
  MenuItem,
  FormControl,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Snackbar,
  Alert,
} from "@mui/material";

import heroSvg from "~/assets/hero.png";
import { useLocales } from "~/hooks/useLocales";

import { Section, Container, Title } from "../../HomeStyled";
import {
  ButtonShortenLink,
  ButtonCopyLink,
  Notify,
  Spinner,
  ShortenLinkContainer,
  ShortenLinkInput,
  HeroImage,
  CopyGroup,
  NewButton,
  AdvantageButton,
  AdvantageContainer,
  CloseButton,
  QRCodeContainer,
  HistoryContainer,
  HistoryTitle,
} from "./ToolsStyled";
import saveUrlToLocal from "~/services/save-url-to-local";
import getHistory from "~/services/get-history";
import convertTimestamp from "~/services/convert-timestamp";
import shortenLink from "~/apis/shorten-link";
import deleteHistory from "~/services/delete-history";
import type { ShortenLink } from "~/interfaces";

const LINK_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/g;
const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";

const Tools: NextPage = () => {
  const [copy, setCopy] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [notify, setNotify] = useState<boolean>(false);
  const [advantage, setAdvantage] = useState<boolean>(false);
  const [copyNotify, setCopyNotify] = useState<boolean>(false);
  const [history, setHistory] = useState<ShortenLink[]>(() => {
    return getHistory().slice(0, 3);
  });

  const shortenLinkInput = useRef<HTMLInputElement>(null);

  const copyText = useLocales("global.copy");
  const visitText = useLocales("tools.visit");
  const shortenLinkText = useLocales("global.shorten");

  const qrCodeId = useId();

  const handleShortenLink = async (): Promise<void> => {
    const input = shortenLinkInput.current as HTMLInputElement;

    if (!input.value?.match(LINK_REGEX)) {
      setNotify(true);
      return await Promise.resolve();
    }

    setNotify(false);
    setLoading(true);

    const result = await shortenLink(input.value);

    const target = `${NEXT_PUBLIC_BASE_URL}/${result}`;

    if (target) {
      await saveUrlToLocal(input.value, target);

      setLoading(false);
      setCopy(true);

      if (input) {
        input.value = target;
      }

      input.disabled = true;
    }

    const history = getHistory().slice(0, 3);
    setHistory(history);

    return await Promise.resolve();
  };

  const handleCopyClick = async (): Promise<void> => {
    const input = shortenLinkInput.current as HTMLInputElement;
    if (input) {
      await navigator.clipboard.writeText(input.value);
    }
    setCopyNotify(true);
    return await Promise.resolve();
  };

  const handleNew = (): void => {
    const input = shortenLinkInput.current as HTMLInputElement;
    if (input) {
      input.value = "";
    }
    input.disabled = false;
    setCopy(false);
  };

  const handleAdvantage = (): void => {
    setAdvantage(true);
    console.log("handleAdvantage");
  };

  const handleDownloadImage = (): void => {
    const svg = document.getElementById(qrCodeId) as HTMLElement;

    const url = window.URL.createObjectURL(
      new Blob([svg.outerHTML], {
        type: "image/svg+xml",
      })
    );

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "qr-code.svg");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLink = async (url: string): Promise<void> => {
    // copy url to clipboard
    await navigator.clipboard.writeText(url);

    // show notify
    setCopyNotify(true);
  };

  const handleVisitLink = (url: string): void => {
    window.open(url, "_blank");
  };

  const handleDelete = (): void => {
    deleteHistory();
    setHistory([]);
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
                <CopyGroup>
                  <ButtonShortenLink onClick={async () => await handleShortenLink()} aria-label="button-shorten">
                    {loading && <Spinner />}
                    {shortenLinkText}
                  </ButtonShortenLink>
                </CopyGroup>
              ) : (
                <CopyGroup>
                  <ButtonCopyLink onClick={async () => await handleCopyClick()} aria-label="copy-button">
                    {copyText}
                  </ButtonCopyLink>
                  <NewButton onClick={() => handleNew()}>x</NewButton>
                  <AdvantageButton onClick={() => handleAdvantage()}>QR Code ...</AdvantageButton>
                </CopyGroup>
              )}
            </ShortenLinkContainer>
            <Notify notify={notify}>{useLocales("global.invalid")}</Notify>
            <Drawer anchor="right" open={advantage} onClose={() => setAdvantage(false)}>
              <AdvantageContainer>
                <CloseButton onClick={() => setAdvantage(false)}>x</CloseButton>
                <QRCodeContainer>
                  {shortenLinkInput.current && <QRCode id={qrCodeId} value={shortenLinkInput.current.value} />}

                  <ButtonGroup size="small" aria-label="QR code n??t">
                    <FormControl size="small" sx={{ marginTop: 1 }}>
                      <Select size="small" aria-label="K??ch th?????c" value={256}>
                        <MenuItem value={32}>32</MenuItem>
                        <MenuItem value={64}>64</MenuItem>
                        <MenuItem value={128}>128</MenuItem>
                        <MenuItem value={256}>256</MenuItem>
                        <MenuItem value={512}>512</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl size="small" sx={{ marginTop: 1 }}>
                      <Select sx={{ marginLeft: 1 }} aria-label="Th??? lo???i" value={"svg"}>
                        <MenuItem value={"png"}>png</MenuItem>
                        <MenuItem value={"svg"}>svg</MenuItem>
                        <MenuItem value={"jpg"}>jpg</MenuItem>
                        <MenuItem value={"webp"}>webp</MenuItem>
                      </Select>
                    </FormControl>
                    <Button sx={{ margin: 1, height: 40 }} endIcon={<Download />} onClick={() => handleDownloadImage()}>
                      {useLocales("global.download")}
                    </Button>
                  </ButtonGroup>
                </QRCodeContainer>
                <Divider sx={{ marginTop: 2 }} />
                <HistoryContainer>
                  <HistoryTitle>{useLocales("global.history")}</HistoryTitle>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>{useLocales("tools.time")}</TableCell>
                        <TableCell
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          {useLocales("tools.link")}
                        </TableCell>
                        <TableCell
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          {useLocales("tools.action")}
                        </TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {history.map((row, index) => (
                        <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                          <TableCell>{convertTimestamp(row.timestamp)}</TableCell>
                          <TableCell>{row.path}</TableCell>
                          <TableCell>
                            <Button
                              sx={{ lineHeight: `17px  !important` }}
                              size="small"
                              color="success"
                              variant="contained"
                              startIcon={<ContentCopy />}
                              onClick={async () => await handleCopyLink(row.path)}
                            >
                              {copyText}
                            </Button>
                            <Button
                              sx={{ marginLeft: 1, lineHeight: `17px  !important` }}
                              size="small"
                              color="primary"
                              variant="contained"
                              startIcon={<ArrowOutward />}
                              onClick={() => handleVisitLink(row.path)}
                            >
                              {visitText}
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Button
                    sx={{ marginTop: 1, lineHeight: `17px  !important` }}
                    size="small"
                    color="warning"
                    variant="outlined"
                    startIcon={<DeleteForever />}
                    onClick={() => handleDelete()}
                  >
                    {useLocales("tools.delete")}
                  </Button>
                </HistoryContainer>
              </AdvantageContainer>
            </Drawer>
            <Snackbar
              open={copyNotify}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              autoHideDuration={3000}
              onClose={() => setCopyNotify(false)}
            >
              <Alert onClose={() => setCopyNotify(false)} severity="success" variant="filled">
                {useLocales("global.copySuccess")}
              </Alert>
            </Snackbar>
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
