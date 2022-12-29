import styled from "@emotion/styled";
import Image from "next/image";

export const HeroImage = styled(Image)`
  width: 100%;
  height: 100%;
  animation: FadeDownLarge 1s ease 0.4s both;
`;

export const ShortenLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: FadeDown 1s ease 0.2s both;
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
  line-height: 20px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonShortenLink = styled(Button)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: #fff;
`;

export const ButtonCopyLink = styled(Button)`
  background-color: #81bf1a;
  color: #fff;
`;

export const ShortenLinkButtonError = styled(Button)`
  background-color: #e5e5e5;
  color: #fff;
  cursor: not-allowed;
`;

interface NotifyProp {
  notify: boolean;
}

export const Notify = styled.p<NotifyProp>`
  margin-top: 6px;
  font-size: 14px;
  color: red;
  visibility: ${(props) => (props.notify ? "visible" : "hidden")};
`;

export const Spinner = styled.i`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 4px;
  border: 2px solid #fff;
  border-top: 2px solid var(--primary-color);
  line-height: 20px;
  border-radius: 50%;
  animation: Spin 1s linear infinite;
`;

export const Copy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  animation: FadeDown 1s ease 0.2s both;
`;
