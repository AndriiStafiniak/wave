import {
  AllContent,
  Button,
  ButtonsContainer,
  Content,
  Description,
  ExtraTitleContent,
  ImageWrapper,
  Img,
  NavLinkPrimButton,
  SecondButton,
  SectionStyle,
  Skills,
  SpecialContent,
  Title,
  TitleSpecial,
} from "./styled";
import { ReactComponent as Main } from "../../images/icons/main.svg";
import { ReactComponent as Icon } from "../../images/icons/icon.svg";
import { MainSection } from "./MainSection";
import { ScrollSlice } from "./ScrollSlice";
import { SectionInfo } from "./SectionInfo";
import { KnowUsSection } from "./KnowUsSection";
import { LastSection } from "./LastSection";
import { toContact, toIt } from "../../routs";
const pathImg = require("../../images/Rectangle1.png");

export const WhyWaveHome = () => {
  const slices = [
    {
      title: "Flexible and adaptable approach",
      description:
        "Our team is constantly learning and expanding their skill set so that we can provide our clients with cutting-edge solutions that deliver results. With our versatile approach, we can quickly respond to changing client demands.",
    },
    {
      title: "Flexible and adaptable approach",
      description:
        "Our team is constantly learning and expanding their skill set so that we can provide our clients with cutting-edge solutions that deliver results. With our versatile approach, we can quickly respond to changing client demands.",
    },
    {
      title: "Flexible and adaptable approach",
      description:
        "Our team is constantly learning and expanding their skill set so that we can provide our clients with cutting-edge solutions that deliver results. With our versatile approach, we can quickly respond to changing client demands.",
    },
  ];
  return (
    <AllContent>
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
            <Button to={toContact()}>Contact Us</Button>
            <SecondButton to={toIt()}>Our Services</SecondButton>
          </ButtonsContainer>
        </Content>
        <ImageWrapper>
          <Img src={pathImg} />
        </ImageWrapper>
      </SectionStyle>
      <MainSection />
      <Skills>
        <SpecialContent>
          <Icon />
          <TitleSpecial>Software developer</TitleSpecial>
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
        <SpecialContent>
          <Icon />
          <TitleSpecial>Software developer</TitleSpecial>
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
        <SpecialContent>
          <Icon />
          <TitleSpecial>Software developer</TitleSpecial>
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
        <SpecialContent>
          <Icon />
          <TitleSpecial>Software developer</TitleSpecial>
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
        <SpecialContent>
          <Icon />
          <TitleSpecial>Software developer</TitleSpecial>
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
        <SpecialContent>
          <Icon />
          <TitleSpecial>Software developer</TitleSpecial>
          At our core, we believe that success is built on strong partnerships.
          That's why we keep communication channels open with our clients every
          step of the way – from conception to deployment. The result? The best
          possible solutions for your users.
        </SpecialContent>
      </Skills>
      <ScrollSlice slices={slices} />
      <SectionInfo />
      <KnowUsSection />
      <ScrollSlice slices={slices} />
      <LastSection />
    </AllContent>
  );
};
{
}
