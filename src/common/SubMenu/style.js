import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const SubMenuLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.header.navLinkColor};
  font-family: Outfit;
  font-size: 15px;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.3px;
  text-transform: uppercase;
`;
export const SubNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;
export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
`;
export const SubMenuTitle = styled.div`
  font-family: Outfit;
  font-size: 15px;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.3px;
  text-transform: uppercase;
`;
