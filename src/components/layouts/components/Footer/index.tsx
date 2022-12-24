import React from "react";
import { Divider, Unstable_Grid2 as Grid } from "@mui/material";

import {
  Footer,
  Container,
  Col,
  Title,
  List,
  Item,
  ItemLink,
  Salenoti,
  LanguageImage,
  LanguageList,
  LanguageItem,
  Copyright,
  CopyrightIcon,
  CopyrightText,
  CopyrightItem,
} from "./FooterStyled";

import salenotiImage from "~/assets/salenoti.png";
import vietnameseFlag from "~/assets/vietnam-flag.svg";
import englishFlag from "~/assets/usa-flag.svg";
import cashFlowIcon from "~/assets/cash-flow-icon.svg";
import corporateUserIcon from "~/assets/corporate-user-icon.svg";
import { LocalesContext, useLocales } from "~/hooks/useLocales";

const FooterContainer: React.FC = () => {
  const { local, setLocal } = React.useContext(LocalesContext);

  const handleSetLanguage = (key: string): void => {
    if (local === key) return;
    setLocal(key);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Footer>
      <Container>
        <Grid container spacing={1} margin={0} padding={1}>
          <Grid md={4} xs={12}>
            <Col>
              <Title>{useLocales("footer.features")}</Title>
              <List>
                <Item>
                  <ItemLink
                    href="/#features"
                    aria-label="Rút gọn link"
                    prefetch={false}
                  >
                    {useLocales("footer.shortenLink")}
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink
                    href="/#features"
                    aria-label="Tạo QR Codes"
                    prefetch={false}
                  >
                    {useLocales("footer.generateQRCode")}
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink
                    href="/#features"
                    aria-label=" Link-in-Bios"
                    prefetch={false}
                  >
                    {useLocales("footer.linkInBios")}
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink
                    href="/#features"
                    aria-label="Biểu đồ thống kê"
                    prefetch={false}
                  >
                    {useLocales("footer.statistic")}
                  </ItemLink>
                </Item>
              </List>
            </Col>
          </Grid>
          <Grid md={4} xs={12}>
            <Col>
              <Title>{useLocales("footer.aboutUs")}</Title>
              <List>
                <Item>
                  <ItemLink
                    href="/me/what-is-beaurl"
                    aria-label="Beaurl"
                    prefetch={false}
                  >
                    {useLocales("footer.beaurl")}
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink
                    href="/me/terms-of-service"
                    aria-label="Điều khoản dịch vụ"
                    prefetch={false}
                  >
                    {useLocales("footer.termsOfService")}
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink
                    href="/me/privacy-policy"
                    aria-label="Chính sách bảo mật"
                    prefetch={false}
                  >
                    {useLocales("footer.privacyPolicy")}
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink
                    href="/me/payment-method"
                    aria-label="Phương thức thanh toán"
                    prefetch={false}
                  >
                    {useLocales("footer.paymentMethod")}
                  </ItemLink>
                </Item>
              </List>
            </Col>
          </Grid>
          <Grid md={4} xs={12}>
            <Col>
              <Salenoti src={salenotiImage} alt="salenoti" />
              <Title>{useLocales("footer.language")}</Title>
              <LanguageList>
                <LanguageItem onClick={() => handleSetLanguage("vi")}>
                  <LanguageImage src={vietnameseFlag} alt="vietnamese" />
                </LanguageItem>
                <LanguageItem onClick={() => handleSetLanguage("en")}>
                  <LanguageImage src={englishFlag} alt="english" />
                </LanguageItem>
              </LanguageList>
            </Col>
          </Grid>
        </Grid>
        <Divider />
        <Copyright>
          <Grid
            container
            spacing={1}
            margin={0}
            padding={1}
            justifyContent={"space-between"}
          >
            <Grid md={4} xs={12}>
              <CopyrightItem>
                <CopyrightIcon src={cashFlowIcon} alt="cashFlowIcon" />
                <CopyrightText>
                  {useLocales("footer.taxCode")}: 123123123123
                </CopyrightText>
              </CopyrightItem>
            </Grid>
            <Grid md={4} xs={12}>
              <CopyrightItem>
                <CopyrightIcon
                  src={corporateUserIcon}
                  alt="corporateUserIcon"
                />
                <CopyrightText>
                  {useLocales("footer.legalRepresentative")}: Mr. Nguyễn Đại
                  Hiệp
                </CopyrightText>
              </CopyrightItem>
            </Grid>
          </Grid>
          <CopyrightText>
            Copyright © 2023 Beaurl. All rights reserved.
          </CopyrightText>
        </Copyright>
      </Container>
    </Footer>
  );
};

export default FooterContainer;
