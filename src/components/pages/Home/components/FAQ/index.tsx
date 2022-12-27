import React, { useState } from "react";

import { Section, Container, CenterTitle, SubTitle, TitleGroup } from "../../HomeStyled";
import { QuestionList } from "./FAQStyled";
import FAQQuestion from "../FAQQuestion";

import { useLocales } from "~/hooks/useLocales";
import questionList from "~/dataSources/FAQ";

const FAQ: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const questions = questionList[useLocales("language.code") as "en" | "vi"];

  const onQuestionClick = (id: string): void => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <Section id="faq">
      <Container>
        <TitleGroup>
          <CenterTitle>{useLocales("faq.title")}</CenterTitle>
          <SubTitle>{useLocales("faq.description")}</SubTitle>
        </TitleGroup>
        {questions && (
          <QuestionList>
            {questions.map((question) => (
              <FAQQuestion key={question._id} {...question} onQuestionClick={onQuestionClick} activeQuestion={activeQuestion} />
            ))}
          </QuestionList>
        )}
      </Container>
    </Section>
  );
};

export default FAQ;
