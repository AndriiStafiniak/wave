import { toContact, toReferenc, toWhyWaveHome } from "../../routs";
import { SubMenu } from "../SubMenu";
import { HeaderContainer, HeaderLogo, MenuLink, NavContainer } from "./styled";

export const Header = () => {
  const imagePath = require("../../images/Logo.png");
  return (
    <HeaderContainer>
      <HeaderLogo src={imagePath}></HeaderLogo>

      <NavContainer>
        <MenuLink to={toWhyWaveHome()}>Why Wave Europe</MenuLink>
        <SubMenu />
        <MenuLink to={toReferenc()}>Referense</MenuLink>
        <MenuLink to={toContact()}>Contact</MenuLink>
      </NavContainer>
    </HeaderContainer>
  );
};
