import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

export const Footer = styled.footer`
  background-color: #f9f9f9;
`;

export const Container = styled.div`
  max-width: 1200px !important;
  margin: 0 auto;
`;

export const Col = styled.div``;

export const Title = styled.h3`
  margin-bottom: 16px;
  padding-top: 8px;
  font-size: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  margin-bottom: 10px;
`;

export const ItemLink = styled(Link)`
  display: block;
  color: #232b33;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    color: var(--primary-color);
    transform: translateX(6px);
    transition: transform 0.4s ease-out 0s;
  }
`;

export const Salenoti = styled(Image)`
  width: 208px;
  height: 81px;
`;

export const LanguageList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const LanguageItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
`;

export const LanguageImage = styled(Image)`
  width: 42px;
  height: 42px;
`;

export const Copyright = styled.div`
  padding: 8px 0;
  text-align: center;
`;

export const CopyrightItem = styled.div`
  display: flex;
  align-items: center;
`;

export const CopyrightIcon = styled(Image)`
  width: 20px;
  height: 20px;
`;

export const CopyrightText = styled.p`
  display: inline-block;
  margin-left: 6px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.4s ease 0s;

  @media screen and (max-width: 900px) {
    font-weight: 500;
  }
`;
