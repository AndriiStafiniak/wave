import { ContainerLastSection, ContentLas, NavLinks } from "./styled";
import { ReactComponent as Line } from "../../../images/icons/line.svg";

export const LastSection = () => {
  return (
    <ContainerLastSection>
      <ContentLas>
        <NavLinks>IT Recruitment</NavLinks>
        <NavLinks>Software Development</NavLinks>
        <NavLinks>Cyber Security</NavLinks>
      </ContentLas>
    </ContainerLastSection>
  );
};
