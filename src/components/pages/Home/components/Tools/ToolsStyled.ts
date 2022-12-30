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
  width: 150px !important;
  height: 60px;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: all 0.2s ease;

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
  transition: all 0.2s ease;
`;

export const ButtonCopyLink = styled(Button)`
  background-color: #81bf1a;
  width: 100%;
  color: #fff;

  &:active {
    background-color: #6aa00f;
  }
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

export const CopyGroup = styled.div``;

export const NewButton = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  right: 160px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: #fff;
  text-align: center;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const AdvantageButton = styled.div`
  position: absolute;
  display: block;
  top: 106%;
  left: 0;
  width: 80px;
  height: 26px;
  line-height: 26px;
  background-color: #81bf1a;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const AdvantageContainer = styled.div`
  width: 700px;
`;

export const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: rotate(180deg);
  }
`;

export const QRCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const HistoryContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const HistoryTitle = styled.h2`
  margin-top: 20px;
`;
