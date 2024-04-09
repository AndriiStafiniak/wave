import {
  Title,
  Section,
  Container,
  ImageWrapper,
  Img,
  Description,
  Content,
  ContentTitle,
  BgImg,
} from "./styled";

export const BenefitsSection = ({
  title,
  description,
  path,
  pathBg,
  contentTitle,
}) => (
  <Section>
    <Title>{title}</Title>
    <Container>
      <ImageWrapper>
        <Img src={path} />
        <BgImg src={pathBg} />
      </ImageWrapper>
      <Content>
        <ContentTitle>{contentTitle}</ContentTitle>
        <Description>{description}</Description>
      </Content>
    </Container>
    <Container>
      <Content>
        <ContentTitle>{contentTitle}</ContentTitle>
        <Description>{description}</Description>
      </Content>
      <ImageWrapper>
        <Img src={path} />
        <BgImg src={pathBg} />
      </ImageWrapper>
    </Container>
    <Container>
      <ImageWrapper>
        <Img src={path} />
        <BgImg src={pathBg} />
      </ImageWrapper>
      <Content>
        <ContentTitle>{contentTitle}</ContentTitle>
        <Description>{description}</Description>
      </Content>
    </Container>
    <Container>
      <Content>
        <ContentTitle>{contentTitle}</ContentTitle>
        <Description>{description}</Description>
      </Content>
      <ImageWrapper>
        <Img src={path} />
        <BgImg src={pathBg} />
      </ImageWrapper>
    </Container>
    <Container>
      <ImageWrapper>
        <Img src={path} />
        <BgImg src={pathBg} />
      </ImageWrapper>
      <Content>
        <ContentTitle>{contentTitle}</ContentTitle>
        <Description>{description}</Description>
      </Content>
    </Container>
  </Section>
);
