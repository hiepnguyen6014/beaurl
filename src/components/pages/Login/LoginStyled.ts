import styled from "@emotion/styled";

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
  width: 778px;
  max-width: 95%;
  height: 590px;
  background-color: #fff;
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;
