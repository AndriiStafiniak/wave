import { toContact, toReferenc, toWhyWaveHome } from "../../routs";
import { NewsletterForm } from "./Newsleter";
import { SubMenu } from "../SubMenu";
import {
  ContactContainer,
  FooterContainer,
  FooterLogo,
  MenuLink,
  NavContainer,
  SocialItem,
  SubFooter,
  Text,
} from "./styled";
const imagePath = require("../../images/Logo.png");

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLogo src={imagePath} />
        <NavContainer>
          <MenuLink to={toWhyWaveHome()}>Why Wave Europe</MenuLink>
          <SubMenu />
          <MenuLink to={toReferenc()}>Referense</MenuLink>
          <MenuLink to={toContact()}>Contact</MenuLink>
        </NavContainer>
        <NavContainer>
          <MenuLink to="mailto:someome@someone">Mail</MenuLink>
          <MenuLink to="tel:000000000">Telefon</MenuLink>
          <MenuLink to="Warszawa">Adress</MenuLink>
        </NavContainer>
        <NewsletterForm />
      </FooterContainer>
      <SubFooter>
        <Text>
          © 2023 WAVE . All Rights Reserved. Terms & Conditions. Privacy Policy.
        </Text>
        <SocialItem />
      </SubFooter>
    </>
  );
};
