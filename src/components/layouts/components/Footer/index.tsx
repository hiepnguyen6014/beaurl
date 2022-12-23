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

const FooterContainer: React.FC = () => {
  return (
    <Footer>
      <Container>
        <Grid container spacing={1} margin={0} padding={1}>
          <Grid md={4} xs={12}>
            <Col>
              <Title>Sản phẩm</Title>
              <List>
                <Item>
                  <ItemLink href="/" aria-label="Rút gọn link">
                    Rút gọn link
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink href="/" aria-label="Tạo QR Codes">
                    Tạo QR Codes
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink href="/" aria-label=" Link-in-Bios">
                    Link-in-Bios
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink href="/" aria-label="Biểu đồ thống kê">
                    Biểu đồ thống kê
                  </ItemLink>
                </Item>
              </List>
            </Col>
          </Grid>
          <Grid md={4} xs={12}>
            <Col>
              <Title>Về chúng tôi</Title>
              <List>
                <Item>
                  <ItemLink href="/" aria-label="Beaurl">
                    Beaurl
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink href="/" aria-label="Điều khoản sử dụng">
                    Điều khoản sử dụng
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink href="/" aria-label="Chính sách bảo mật">
                    Chính sách bảo mật
                  </ItemLink>
                </Item>
                <Item>
                  <ItemLink href="/" aria-label="Phương thức thanh toán">
                    Phương thức thanh toán
                  </ItemLink>
                </Item>
              </List>
            </Col>
          </Grid>
          <Grid md={4} xs={12}>
            <Col>
              <Salenoti src={salenotiImage} alt="salenoti" />
              <Title>Ngôn ngữ</Title>
              <LanguageList>
                <LanguageItem>
                  <LanguageImage src={vietnameseFlag} alt="vietnamese" />
                </LanguageItem>
                <LanguageItem>
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
                <CopyrightText>Mã số thuế: 123123123123</CopyrightText>
              </CopyrightItem>
            </Grid>
            <Grid md={4} xs={12}>
              <CopyrightItem>
                <CopyrightIcon
                  src={corporateUserIcon}
                  alt="corporateUserIcon"
                />
                <CopyrightText>
                  Người đại diện: Mr. Nguyễn Đại Hiệp
                </CopyrightText>
              </CopyrightItem>
            </Grid>
          </Grid>
          <CopyrightText>
            Copyright © 2022 Beaurl. All rights reserved.
          </CopyrightText>
        </Copyright>
      </Container>
    </Footer>
  );
};

export default FooterContainer;
