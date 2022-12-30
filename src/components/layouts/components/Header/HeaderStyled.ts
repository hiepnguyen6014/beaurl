import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  shadow: boolean;
}

export const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  right: 0px;
  left: 0px;
  margin-top: 0px;
  background-color: #fff;
  z-index: 100;
  box-shadow: ${({ shadow }) => (shadow ? "0 0.65rem 1rem rgba(18, 38, 63, 0.03) !important" : "none")};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px !important;
  height: 80px;
  margin: 0 auto;
  padding: 0 8px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Image)`
  width: 134px;
  height: 48px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  list-style: none;
  max-height: 80px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
`;

export const NavItemLink = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  color: #232b33;
  font-size: 18px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    color: var(--primary-color);
  }
`;

export const MenuButton = styled.button`
  display: none;
  margin-right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const MenuIcon = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const AuthButton = styled.button`
  display: block;
  padding: 12px 20px;
  margin-left: 30px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  border: none;
  background-color: var(--primary-color);

  &:hover {
    opacity: 0.8;
  }
`;

export const Menu = styled.div`
  width: 300px;
  max-width: 80vw;
  overflow: hidden;
`;

export const LogoButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 0 20px;
`;

export const MenuNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  list-style: none;
`;

export const MenuNavItem = styled.li`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
`;

export const AuthLink = styled(Link)`
  display: block;
  width: 100%;
  color: #232b33;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  background-color: transparent;
  margin-top: 20px;
  margin-left: 20px;

  &:hover {
    color: var(--primary-color);
  }
`;

export const MenuNavItemLink = styled(NavItemLink)`
  text-align: left;
`;

export const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
