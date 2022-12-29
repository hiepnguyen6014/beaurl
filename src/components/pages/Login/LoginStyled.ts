import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-image: url("/login-background.jpg");
  background-size: contain;
`;

export const LoginCard = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  max-width: 95%;
  height: 590px;
  max-height: 95%;
  background-color: #fff;
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const Logo = styled(Image)`
  margin-top: 40px;
  width: 194px;
  height: 88px;
`;

export const Title = styled.h1`
  margin-top: 30px;
  font-size: 36px;
  font-weight: 600;
  color: #000;
`;

export const Policy = styled.p`
  position: absolute;
  bottom: 10px;
  margin-top: 20px;
  max-width: 90%;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  text-align: center;
`;

export const LoginLink = styled(Link)`
  margin: 0 4px;
  font-size: 15px;
  color: #353131;
  font-weight: 500;
  text-decoration: none;
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  max-width: 80%;
  width: 412px;
  height: 63px;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #dce0e3;
  border-radius: 32px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #dce0e3;
  }
`;

export const Icon = styled(Image)`
  width: 32px;
  height: 32px;
  margin-left: 16px;
`;

export const LoginText = styled.p`
  display: block;
  margin-left: 10px;
  width: 75%;
  font-size: 20px;
  text-align: center;
`;
