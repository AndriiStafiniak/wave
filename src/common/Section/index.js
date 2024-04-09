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
  const dotsData = [{ id: 1, top: "10%", left: "20%" }];
  return (
    <SectionStyle>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button>{buttonText}</Button>
      </Content>
      <ImageContainer>
        <img src={imageUrl} alt="Section visual" />
      </ImageContainer>
      {dotsData.map((dot) => (
        <Dot
          key={dot.id}
          top={dot.top}
          right={dot.right}
          bottom={dot.bottom}
          left={dot.left}
        />
      ))}
    </SectionStyle>
  );
};
