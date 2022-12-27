import React from "react";

import { Section, Container, CenterTitle, SubTitle, TitleGroup } from "../../HomeStyled";
import { PricingContainer, PricingCard, Logo, SubDescription, Price, Divider, CheckoutButton } from "./PricingStyled";

import { useLocales } from "~/hooks/useLocales";
import logoIcon from "~/assets/logo.svg";

const Pricing: React.FC = () => {
  return (
    <Section id="pricing">
      <Container>
        <TitleGroup>
          <CenterTitle>{useLocales("pricing.title")}</CenterTitle>
          <SubTitle>{useLocales("pricing.description")}</SubTitle>
        </TitleGroup>
        <PricingContainer>
          <PricingCard>
            <Logo src={logoIcon} alt="logo" />
            <SubDescription>{useLocales("pricing.subDescription")}</SubDescription>
            <Price>22.000 VNĐ</Price>
            <Divider />
            <CheckoutButton href="/func/payment" aria-label="Thanh toán">
              {useLocales("pricing.checkout")}
            </CheckoutButton>
          </PricingCard>
        </PricingContainer>
      </Container>
    </Section>
  );
};

export default Pricing;
