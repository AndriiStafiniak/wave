import { useEffect, useState } from "react";
import {
  ArrowButton,
  ArrowIconStyle,
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
export const SubMenu = ({ onItemClick }) => {
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
  const hideMemu = () => {
    if (showSubMenu) {
      setShowSubMenu(false);
    } else if (!showSubMenu) {
      setShowSubMenu(true);
    }
    return;
  };

  return (
    <SubMenuContainerMain
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ArrowButton onClick={hideMemu}>
        <SubMenuTitle>Services</SubMenuTitle>
        <ArrowIconStyle />
      </ArrowButton>
      {showSubMenu && (
        <SubNavContainer>
          <SubMenuLink onClick={onItemClick} to={toOutSours()}>
            Outsourcing
          </SubMenuLink>
          <SubMenuLink onClick={onItemClick} to={toBusines()}>
            Business Consulting
          </SubMenuLink>
          <SubMenuLink onClick={onItemClick} to={toIt()}>
            IT Recruitmen
          </SubMenuLink>
          <SubMenuLink onClick={onItemClick} to={toSoft()}>
            Software Development
          </SubMenuLink>
          <SubMenuLink onClick={onItemClick} to={toCyber()}>
            Cyber Security
          </SubMenuLink>
          <SubMenuLink onClick={onItemClick} to={toTeam()}>
            Team Setting IT
          </SubMenuLink>
        </SubNavContainer>
      )}
    </SubMenuContainerMain>
  );
};
