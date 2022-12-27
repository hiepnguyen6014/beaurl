import styled from "@emotion/styled";

interface AnswerProps {
  isShow: boolean;
}

export const QuestionItem = styled.li<AnswerProps>`
  position: relative;
  display: block;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid #ee612316;

  ::before {
    content: "";
    position: absolute;
    top: 22px;
    left: 30px;
    border: solid var(--primary-color);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transition: all 0.3s ease;

    ${({ isShow }) => (isShow ? "transform: rotate(45deg);" : "transform: rotate(-135deg);")}
  }
`;

export const Question = styled.h3`
  height: 50px;
  padding: 10px 50px;
  color: var(--primary-color);
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
`;

export const Answer = styled.p`
  padding: 4px 70px;
  color: #7c7f83;
  text-align: justify;
`;

export const Button = styled.button`
  width: 100%;
  text-align: left;
  background-color: #fff;
  border: none;
`;
