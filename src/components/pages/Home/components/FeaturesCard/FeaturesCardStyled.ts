import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 327px;
  width: 100%;
  height: 502px;
  border-radius: 16px;
  border: 2px solid var(--primary-color);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 900px) {
    margin-top: 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
  padding-left: 10px;
`;

export const Description = styled.p`
  width: 100%;
  height: 120px;
  font-size: 16px;
  font-weight: 500;
  color: #56575b;
  margin-top: 36px;
  padding: 0 20px;
  text-align: center;
  vertical-align: middle;
`;

export const Characteristics = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  padding: 14px 20px;
`;

export const FeaturesList = styled.ul`
  width: 100%;
  padding-left: 50px;
  color: #56575b;
`;

export const FeaturesItem = styled.li`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const Button = styled(Link)`
  display: inline-block;
  width: 84%;
  height: 50px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  border-radius: 8px;
  text-decoration: none;
  background-color: var(--primary-color);
`;

export const Divider = styled.div`
  width: 85%;
  height: 1px;
  background-color: #e5e5e5;
`;
