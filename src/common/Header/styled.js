import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.header.background};
  display: flex;
  justify-content: space-between;
  padding: 18px;
`;
export const HeaderLogo = styled.img`
  width: 250px;
  height: 94px;
  margin: 18px 28px;
`;
export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.header.navLinkColor};
  font-family: Outfit;
  font-size: 15px;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.3px;
  text-transform: uppercase;
`;
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 36px;
`;
