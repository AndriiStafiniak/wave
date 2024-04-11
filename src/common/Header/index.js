import React, { useEffect, useState } from "react";
import { toContact, toReferenc, toWhyWaveHome } from "../../routs";
import { useLocation } from "react-router-dom";
import { SubMenu } from "../SubMenu";
import {
  HeaderContainer,
  HeaderLogo,
  MenuLink,
  BurgerMenuButton,
  BurgerIcon,
  NavContainer,
  LogoLink,
} from "./styled";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const closeMenu = () => {
    setTimeout(() => setIsOpen(false), 100);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const imagePath = require("../../images/Logo.png");

  return (
    <HeaderContainer>
      <LogoLink to={toWhyWaveHome()}>
        {" "}
        <HeaderLogo src={imagePath} alt="Logo"></HeaderLogo>
      </LogoLink>

      <BurgerMenuButton onClick={() => setIsOpen(!isOpen)}>
        <BurgerIcon isOpen={isOpen} />
      </BurgerMenuButton>

      {(isMobile && isOpen) || !isMobile ? (
        <NavContainer isOpen={isOpen}>
          <MenuLink to={toWhyWaveHome()} onClick={closeMenu}>
            Why Wave Europe
          </MenuLink>
          <SubMenu onItemClick={closeMenu} onClick={closeMenu} />
          <MenuLink to={toReferenc()} onClick={closeMenu}>
            Referense
          </MenuLink>
          <MenuLink to={toContact()} onClick={closeMenu}>
            Contact
          </MenuLink>
        </NavContainer>
      ) : null}
    </HeaderContainer>
  );
};
