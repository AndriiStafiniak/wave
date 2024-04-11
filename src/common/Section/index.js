import { toContact } from "../../routs";
import {
  Button,
  Content,
  Description,
  Dot,
  ImageContainer,
  SectionStyle,
  Title,
} from "./styed";
export const Section = ({ title, description, buttonText, imageUrl }) => {
  return (
    <SectionStyle>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button to={toContact()}>{buttonText}</Button>
      </Content>
      <ImageContainer>
        <img src={imageUrl} alt="Section visual" />
      </ImageContainer>
    </SectionStyle>
  );
};
