import React from "react";
import { Drawer, Divider, Menu as MenuMui, MenuItem } from "@mui/material";

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
  Avatar,
} from "./HeaderStyled";

import logo from "~/assets/logo.svg";
import menuIcon from "~/assets/menu-bar-icon.svg";
import { useLocales } from "~/hooks/useLocales";

const HeaderContainer: React.FC<{
  showNav?: boolean;
}> = ({ showNav }) => {
  const headerFeatures = useLocales("header.features");
  const headerPricing = useLocales("header.pricing");
  const headerFaq = useLocales("header.faq");
  const headerLogin = useLocales("global.login");
  const logoutText = useLocales("global.logout");
  const profileText = useLocales("global.profile");

  const [shadow, setShadow] = React.useState<boolean>(false);
  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);
  const [login, setLogin] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLImageElement | null>(null);

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

  const handleLogin = (): void => {
    window.location.href = "/func/login";
  };

  const handleClickAvatar = (event: React.MouseEvent<HTMLImageElement>): void => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleViewProfile = (): void => {
    window.location.href = "/me/profile";
  };

  const handleLogout = (): void => {
    setOpen(false);
    setLogin(false);

    window.location.href = "/";
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
        {showNav ? (
          <>
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
              {!login ? (
                <AuthButton aria-label="login-button" onClick={() => handleLogin()}>
                  {headerLogin}
                </AuthButton>
              ) : (
                <Avatar
                  onClick={(e) => handleClickAvatar(e)}
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="avatar"
                  width={40}
                  height={40}
                />
              )}
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
                  {!login && (
                    <AuthLink aria-label="login-link" href="/func/login">
                      {headerLogin}
                    </AuthLink>
                  )}
                </MenuNavList>
              </Menu>
            </Drawer>
          </>
        ) : (
          <Avatar
            onClick={(e) => handleClickAvatar(e)}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            width={40}
            height={40}
          />
        )}
        <MenuMui
          open={open}
          anchorEl={anchorEl}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={() => handleViewProfile()}>{profileText}</MenuItem>
          <Divider />
          <MenuItem onClick={() => handleLogout()}>{logoutText}</MenuItem>
        </MenuMui>
      </Container>
    </Header>
  );
};

export default HeaderContainer;
