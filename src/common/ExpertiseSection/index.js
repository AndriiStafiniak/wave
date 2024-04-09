import {
  ContentTitle,
  Description,
  NumberBall,
  Section,
  SubTitle,
  Title,
} from "./styled";
import { ReactComponent as Vector } from "../../images/icons/vector.svg";
import { ReactComponent as SmallDot } from "../../images/icons/smallDot.svg";

export const ExpertiseSection = ({
  contentTitle,
  description,
  title,
  subtitle,
}) => (
  <Section>
    <ContentTitle>{contentTitle}</ContentTitle>
    <Description>{description}</Description>
    <Title>{title}</Title>
    <Vector />
    <SmallDot />
    <SmallDot />
    <NumberBall>1</NumberBall>
    <SubTitle>{subtitle}</SubTitle>
    <Description>{description}</Description>
    <Vector />
    <SmallDot />
    <SmallDot />
    <NumberBall>2</NumberBall>
    <SubTitle>{subtitle}</SubTitle>
    <Description>{description}</Description>
    <Vector />
    <SmallDot />
    <SmallDot />
    <NumberBall>3</NumberBall>
    <SubTitle>{subtitle}</SubTitle>
    <Description>{description}</Description>
    <Vector />
    <SmallDot />
    <SmallDot />
    <NumberBall>4</NumberBall>
    <SubTitle>{subtitle}</SubTitle>
    <Description>{description}</Description>
  </Section>
);
