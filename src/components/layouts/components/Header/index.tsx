import React from "react";
import Link from "next/link";
import { Drawer } from "@mui/material";

import {
  Container,
  Header,
  Logo,
  NavList,
  NavItem,
  MenuButton,
  MenuIcon,
  AuthButton,
} from "./HeaderStyled";

import logo from "~/assets/logo.svg";
import menuIcon from "~/assets/menu-bar-icon.svg";
import { useLocales } from "~/hooks/useLocales";

const HeaderContainer: React.FC = () => {
  const headerFeatures = useLocales("header.features");
  const headerPricing = useLocales("header.pricing");
  const headerFaq = useLocales("header.faq");
  const headerLogin = useLocales("global.login");

  const [shadow, setShadow] = React.useState<boolean>(false);
  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);

  const handleScroll = (): void => {
    if (window.scrollY > 0) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Header shadow={shadow}>
      <Container>
        <Link href="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <NavList>
          <NavItem>{headerFeatures}</NavItem>
          <NavItem>{headerPricing}</NavItem>
          <NavItem>{headerFaq}</NavItem>
          <AuthButton>{headerLogin}</AuthButton>
        </NavList>
        <MenuButton onClick={() => setShowDrawer(true)}>
          <MenuIcon src={menuIcon} alt="menu-icon" />
        </MenuButton>
        <Drawer
          anchor={"right"}
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
        >
          search me for edit: 123861283628716378
        </Drawer>
      </Container>
    </Header>
  );
};

export default HeaderContainer;
