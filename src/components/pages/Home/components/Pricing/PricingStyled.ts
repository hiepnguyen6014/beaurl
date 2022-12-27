import styled from "@emotion/styled";
import Image from "next/image";

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin: 0 auto;
  max-width: 90%;
`;

export const PricingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 422px;
  width: 696px;
  margin: 0 auto;
  border-radius: 14px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled(Image)`
  margin-top: 40px;
`;

export const SubDescription = styled.p`
  margin-top: 36px;
  padding: 0 50px;
  color: #262b33;
  text-align: center;

  @media screen and (max-width: 900px) {
    padding: 0 20px;
  }
`;

export const Price = styled.p`
  margin-top: 16px;
  color: var(--primary-color);
  font-size: 46px;
  font-weight: 600;
`;

export const Divider = styled.div`
  margin-top: 36px;
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
`;

export const CheckoutButton = styled.a`
  margin: auto 0;
  width: 220px;
  height: 60px;
  color: #fff;
  background-color: var(--primary-color);
  font-size: 28px;
  text-decoration: none;
  border: none;
  text-align: center;
  line-height: 60px;
  border-radius: 4px;
  cursor: pointer;
`;
