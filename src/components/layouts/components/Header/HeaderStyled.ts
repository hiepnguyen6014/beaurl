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
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
`;

export const NavItemLink = styled(Link)`
  display: block;
  color: #232b33;
  text-decoration: none;

  &:hover {
    color: var(--primary-color);
  }
`;

export const MenuButton = styled.div`
  display: none;
  margin-right: 20px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
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
