import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Social } from "../../images/icons/socials.svg";

export const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.header.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  border-bottom: 1px solid #000;
`;
export const FooterLogo = styled.img`
  width: 250px;
  height: 94px;
  margin: 18px 28px;
`;
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.header.navLinkColor};
  font-family: Outfit;
  font-size: 14px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 170%;
`;

export const SubFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.header.background};
  align-items: center;
  padding: 20px;
`;

export const Text = styled.p``;
export const SocialItem = styled(Social)``;
