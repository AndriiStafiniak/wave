import { useEffect, useState } from "react";
import { ReactComponent as ArrowIcon } from "../../images/icons/arrow.svg";
import {
  ArrowButton,
  SubMenuContainer,
  SubMenuContainerMain,
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
  useEffect(() => {
    if (showSubMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showSubMenu]);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <SubMenuContainerMain
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ArrowButton>
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
    </SubMenuContainerMain>
  );
};
