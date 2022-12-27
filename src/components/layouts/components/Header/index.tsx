import React from "react";
import { Drawer, Divider } from "@mui/material";

import {
  Container,
  Header,
  Logo,
  NavList,
  NavItem,
  MenuButton,
  MenuIcon,
  AuthButton,
  LogoLink,
  NavItemLink,
  Menu,
  LogoButton,
  MenuNavItem,
  MenuNavList,
  AuthLink,
  MenuNavItemLink,
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

  const handleClickNav = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }

    if (showDrawer) {
      setShowDrawer(false);
    }
  };

  const handleLogoClick = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowDrawer(false);
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
        <LogoLink href="/" aria-label="home-button">
          <Logo src={logo} alt="logo" />
        </LogoLink>
        <NavList>
          <NavItem>
            <NavItemLink aria-label="Tính năng" onClick={() => handleClickNav("features")}>
              {headerFeatures}
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink aria-label="Bảng giá" onClick={() => handleClickNav("pricing")}>
              {headerPricing}
            </NavItemLink>
          </NavItem>
          <NavItem>
            <NavItemLink aria-label="FAQ" onClick={() => handleClickNav("faq")}>
              {headerFaq}
            </NavItemLink>
          </NavItem>
          <AuthButton aria-label="login-button">{headerLogin}</AuthButton>
        </NavList>
        <MenuButton onClick={() => setShowDrawer(true)} aria-label="menu-button">
          <MenuIcon src={menuIcon} alt="menu-icon" />
        </MenuButton>
        <Drawer anchor={"right"} open={showDrawer} onClose={() => setShowDrawer(false)}>
          <Menu>
            <LogoButton aria-label="home-button" onClick={() => handleLogoClick()}>
              <Logo src={logo} alt="logo" />
            </LogoButton>
            <Divider />
            <MenuNavList>
              <MenuNavItem>
                <MenuNavItemLink aria-label="Tính năng" onClick={() => handleClickNav("features")}>
                  {headerFeatures}
                </MenuNavItemLink>
              </MenuNavItem>
              <MenuNavItem>
                <MenuNavItemLink aria-label="Bảng giá" onClick={() => handleClickNav("pricing")}>
                  {headerPricing}
                </MenuNavItemLink>
              </MenuNavItem>
              <MenuNavItem>
                <MenuNavItemLink aria-label="FAQ" onClick={() => handleClickNav("faq")}>
                  {headerFaq}
                </MenuNavItemLink>
              </MenuNavItem>
              <AuthLink aria-label="login-link" href="/login">
                {headerLogin}
              </AuthLink>
            </MenuNavList>
          </Menu>
        </Drawer>
      </Container>
    </Header>
  );
};

export default HeaderContainer;
