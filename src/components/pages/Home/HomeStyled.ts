import styled from "@emotion/styled";

export const Main = styled.main`
  margin-top: 80px;
`;

export const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 40px;
  visibility: visible;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-top: 60px;
  font-size: 40px;
  font-weight: 600;
  animation: FadeDown 1s ease 0.2s both;

  @media screen and (max-width: 900px) {
    font-size: 30px;
  }
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  animation: FadeDown 0.2s ease 0.1s both;
`;

export const CenterTitle = styled.h3`
  margin-top: 16px;
  font-size: 30px;
  text-align: center;
`;

export const SubTitle = styled.h4`
  max-width: 90vw;
  margin-bottom: 56px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #56575b;
`;
