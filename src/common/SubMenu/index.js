import { useState } from "react";
import { ReactComponent as ArrowIcon } from "../../images/icons/arrow.svg";
import {
  ArrowButton,
  SubMenuLink,
  SubMenuTitle,
  SubNavContainer,
} from "./style";
import {
  toBusines,
  toCyber,
  toIt,
  toOutSours,
  toSoft,
  toTeam,
} from "../../routs";
export const SubMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
    setTimeout(() => {
      setShowSubMenu(false);
    }, 10000);
  };

  return (
    <>
      <ArrowButton onClick={toggleSubMenu}>
        <SubMenuTitle>Services</SubMenuTitle>
        <ArrowIcon />
      </ArrowButton>
      {showSubMenu && (
        <SubNavContainer>
          <SubMenuLink to={toOutSours()}>Outsourcing</SubMenuLink>
          <SubMenuLink to={toBusines()}>Business Consulting</SubMenuLink>
          <SubMenuLink to={toIt()}>IT Recruitmen</SubMenuLink>
          <SubMenuLink to={toSoft()}>Software Development</SubMenuLink>
          <SubMenuLink to={toCyber()}>Cyber Security</SubMenuLink>
          <SubMenuLink to={toTeam()}>Team Setting IT</SubMenuLink>
        </SubNavContainer>
      )}
    </>
  );
};
