import {
  Container,
  ContainerContent,
  ContainerImg,
  DesriptionContntent,
  FirstImg,
  Gradient,
  SecondtImg,
  TitleContetn,
} from "./style";
import { ReactComponent as ArrowSection } from "../../../images/icons/arrowSection.svg";
import {
  ExtraArrowText,
  ExtraContentContainerArrow,
} from "../../../common/SecondSection/styled";

export const MainSection = () => {
  const firstImg = require("../../../images/Rectangle1112.png");
  const secondImg = require("../../../images/Rectangle1113.png");

  return (
    <Container>
      <ContainerImg>
        <FirstImg src={firstImg} />
        <SecondtImg src={secondImg} />
        <Gradient />
      </ContainerImg>
      <ContainerContent>
        <ExtraContentContainerArrow>
          <ArrowSection />
          <ExtraArrowText>
            Change is not just inevitable, it's essential. 
          </ExtraArrowText>
        </ExtraContentContainerArrow>
        <div>
          <TitleContetn>We ride Wave of change</TitleContetn>
          <DesriptionContntent>
            It's what drives progress and innovation. With 20 years of
            experience in the industry, we have honed our expertise in software
            development to create custom solutions that meet the unique needs of
            our clients.  But what sets us apart is our unwavering passion for
            what we do. Our fresh approach will have you harnessing the tides of
            opportunity.
          </DesriptionContntent>
        </div>
      </ContainerContent>
    </Container>
  );
};
