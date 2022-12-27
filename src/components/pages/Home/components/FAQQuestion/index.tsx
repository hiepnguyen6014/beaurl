import React from "react";
import { Collapse } from "@mui/material";

import { QuestionItem, Question, Answer, Button } from "./FAQQuestionStyled";

const FAQQuestion: React.FC<{
  _id: string;
  question: string;
  answer: string;
  onQuestionClick: (id: string) => void;
  activeQuestion: string | null;
}> = ({ question, answer, _id, onQuestionClick, activeQuestion }) => {
  return (
    <QuestionItem isShow={_id === activeQuestion} onClick={() => onQuestionClick(_id)}>
      <Button aria-label={question}>
        <Question>{question}</Question>
        <Collapse in={_id === activeQuestion} timeout={400} unmountOnExit>
          <Answer>{answer}</Answer>
        </Collapse>
      </Button>
    </QuestionItem>
  );
};

export default FAQQuestion;
