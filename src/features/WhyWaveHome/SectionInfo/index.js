import { NumberBall } from "../../../common/ExpertiseSection/styled";
import { Button, Content, Description, Title } from "../styled";
import {
  ExtraListContent,
  ExtraObjectContent,
  ExtraObjectContentText,
  Figure,
  GradientObject,
  Image,
  ImageContainer,
  ListInfo,
  MainTitle,
  WrapperMain,
  SectionStyle,
} from "./style";
const imagePath = require("../../../images/Rectangle1413.png");

export const SectionInfo = () => {
  return (
    <SectionStyle>
      <MainTitle>Our technology</MainTitle>
      <ListInfo>
        <NumberBall>✔ </NumberBall> <ExtraListContent>C++</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>Java</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>Css</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>Html</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>C++</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>Java</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>Css</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>Html</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>C++</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>Java</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>Css</ExtraListContent>
        <NumberBall>✔ </NumberBall> <ExtraListContent>Html</ExtraListContent>
      </ListInfo>
      <WrapperMain>
        <ImageContainer>
          <Image src={imagePath} />
          <GradientObject>
            <ExtraObjectContent>20</ExtraObjectContent>
            <ExtraObjectContentText>Years of experience</ExtraObjectContentText>
          </GradientObject>
          <Figure />
        </ImageContainer>
        <Content>
          <Title>The tech stack behind our solutions</Title>
          <Description>
            At Wave, we pride ourselves on using the latest and most innovative
            technologies to power our solutions. Our tech stack is carefully
            crafted to deliver the best possible results for you – our clients.
            We are highly skilled in a variety of programming languages,
            frameworks and platforms, including C++, .NET, JavaScript, Java,
            Android, iOS, Ruby on Rails, PHP, Delphi, and more. All of this
            allows us to deliver custom-built products that perfectly fit your
            requirements.
          </Description>
          <Button to="tel: 111111111">Call now →</Button>
        </Content>
      </WrapperMain>
    </SectionStyle>
  );
};
