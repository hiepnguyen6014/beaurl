import styled from "@emotion/styled";
import Image from "next/image";

export const Main = styled.main`
  margin-top: 80px;
`;

export const Section = styled.section``;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  margin-top: 60px;
  font-size: 40px;
  font-weight: 600;

  @media screen and (max-width: 900px) {
    font-size: 30px;
  }
`;

export const TitleGroup = styled.div`
  margin-top: 16px;
`;

export const CenterTitle = styled.h3`
  margin-top: 16px;
  font-size: 30px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #56575b;
`;

export const ShortenLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShortenLinkInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  border: 1px solid #e5e5e5;
  border-radius: 4px 0 0 4px;
  font-size: 18px;
  font-weight: 500;
  color: #232b33;
  outline: none;
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonShortenLink = styled(Button)`
  background-color: var(--primary-color);
  color: #fff;
`;

export const ButtonCopyLink = styled(Button)`
  background-color: #e5e5e5;
  color: #fff;
  cursor: not-allowed;
  display: none;
`;

export const ShortenLinkButtonError = styled(Button)`
  background-color: #e5e5e5;
  color: #fff;
  cursor: not-allowed;
`;
