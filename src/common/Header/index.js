import React, { useEffect, useState } from "react";
import { toContact, toReferenc, toWhyWaveHome } from "../../routs";
import { SubMenu } from "../SubMenu";
import {
  HeaderContainer,
  HeaderLogo,
  MenuLink,
  NavContainerStyled,
  BurgerMenuButton,
  BurgerIcon,
  NavContainer,
} from "./styled";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const imagePath = require("../../images/Logo.png");

  return (
    <HeaderContainer>
      <HeaderLogo src={imagePath} alt="Logo"></HeaderLogo>

      <BurgerMenuButton onClick={() => setIsOpen(!isOpen)}>
        <BurgerIcon isOpen={isOpen} />
      </BurgerMenuButton>

      {(isMobile && isOpen) || !isMobile ? (
        <NavContainer isOpen={isOpen}>
          <MenuLink to={toWhyWaveHome()}>Why Wave Europe</MenuLink>
          <SubMenu />
          <MenuLink to={toReferenc()}>Referense</MenuLink>
          <MenuLink to={toContact()}>Contact</MenuLink>
        </NavContainer>
      ) : null}
    </HeaderContainer>
  );
};
