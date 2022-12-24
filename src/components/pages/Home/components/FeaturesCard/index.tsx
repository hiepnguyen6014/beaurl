import React, { memo } from "react";
import Image, { StaticImageData } from "next/image";

import { Container, Header, Title, Description, Characteristics, FeaturesList, FeaturesItem, Button, Divider } from "./FeaturesCardStyled";
import { useLocales as translate } from "~/hooks/useLocales";

const FeaturesCard: React.FC<{
  title: string;
  desc: string;
  icon: StaticImageData;
  features: string[];
}> = ({ title, desc, icon, features }) => {
  return (
    <Container>
      <Header>
        <Image src={icon} alt={title} width={28} height={28} />
        <Title>{translate(title)}</Title>
      </Header>
      <Description>{translate(desc)}</Description>
      <Divider />
      <Characteristics>{translate("features.characteristic")}</Characteristics>
      <FeaturesList>
        {features.map((feature, index) => (
          <FeaturesItem key={index}>{translate(feature)}</FeaturesItem>
        ))}
      </FeaturesList>
      <Button href="/#features">{translate("feature.use")}</Button>
    </Container>
  );
};

export default memo(FeaturesCard);
