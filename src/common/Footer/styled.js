import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Social } from "../../images/icons/socials.svg";

export const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.header.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.125rem; /* 18px */
  border-bottom: 1px solid #000;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
    justify-content: center;
  }
`;

export const FooterLogo = styled.img`
  width: 15.625rem; /* 250px */
  height: 5.875rem; /* 94px */
  margin: 1.125rem 1.75rem; /* 18px 28px */

  @media (max-width: 900px) {
    margin: 1rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem; /* 10px */
  margin-bottom: 20px;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.header.navLinkColor};
  font-family: Outfit;
  font-size: 0.875rem; /* 14px */
  letter-spacing: -0.01875rem; /* -0.3px */
  text-transform: uppercase;
  font-weight: 500;
  line-height: 170%;

  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;

export const SubFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.header.background};
  align-items: center;
  padding: 1.25rem; /* 20px */

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
    gap: 20px;
  }
`;

export const Text = styled.p`
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const SocialItem = styled(Social)``;
export const FooterLinkContainer = styled.div`
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
`;
