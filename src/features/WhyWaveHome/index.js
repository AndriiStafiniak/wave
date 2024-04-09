import {
  Button,
  ButtonsContainer,
  Content,
  Description,
  ExtraTitleContent,
  ImageWrapper,
  Img,
  SecondButton,
  SectionStyle,
  Skills,
  SpecialContent,
  Title,
  TitleSpecial,
} from "./styled";
import { ReactComponent as Main } from "../../images/icons/main.svg";
import { ReactComponent as Icon } from "../../images/icons/icon.svg";
const pathImg = require("../../images/Rectangle1.png");

export const WhyWaveHome = () => {
  return (
    <>
      <SectionStyle>
        <Content>
          <Main />
          <ExtraTitleContent>Rediscover IT Nearshoring</ExtraTitleContent>
          <Title>Why wave Europe</Title>
          <Description>
            Are you looking to expand your business? Allow us to help you with
            our specialized team scaling and outsourcing services. We can
            provide you with tailored strategies designed to work perfectly for
            your brand, no matter what challenges or needs arise.
          </Description>
          <ButtonsContainer>
            <Button>Contact Us</Button>
            <SecondButton>Our Services</SecondButton>
          </ButtonsContainer>
        </Content>
        <ImageWrapper>
          <Img src={pathImg} />
        </ImageWrapper>
      </SectionStyle>
      <Skills>
        <SpecialContent>
          <TitleSpecial>Software developer</TitleSpecial>
          <Icon />
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
        <SpecialContent>
          <TitleSpecial>Software developer</TitleSpecial>
          <Icon />
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
        <SpecialContent>
          <TitleSpecial>Software developer</TitleSpecial>
          <Icon />
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
        <SpecialContent>
          <TitleSpecial>Software developer</TitleSpecial>
          <Icon />
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
        <SpecialContent>
          <TitleSpecial>Software developer</TitleSpecial>
          <Icon />
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
        <SpecialContent>
          <TitleSpecial>Software developer</TitleSpecial>
          <Icon />
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
      </Skills>
    </>
  );
};
