import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 120rem; /* 1920px */
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.header.background};
  display: flex;
  justify-content: space-between;
  padding: 1.125rem; /* 18px */
`;

export const HeaderLogo = styled.img`
  width: 15.625rem; /* 250px */
  height: 5.875rem; /* 94px */
  margin: 1.125rem 1.75rem; /* 18px 28px */

  @media (max-width: 900px) {
    width: 8rem;
    height: auto;
    margin: 1rem;
  }
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.header.navLinkColor};
  font-family: Outfit;
  font-size: 0.9375rem; /* 15px */
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.01875rem; /* -0.3px */
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 2rem;
    color: #b7b7b7;
  }
`;

export const BurgerIcon = styled.div`
  width: 30px;
  height: 2px;
  background-color: #000;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: #000;
    width: 30px;
    height: 2px;
    position: absolute;
    left: 0;
  }
  &::before {
    top: -10px;
  }
  &::after {
    top: 10px;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    background-color: transparent;
    &::before {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &::after {
      transform: rotate(-45deg) translate(7px, -8px);
    }
  `}
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row
  justify-content: center;
  align-items: center;
  gap: 2.25rem; /* 36px */
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
  }
`;

export const BurgerMenuButton = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  display: none;
  @media (max-width: 767px) {
    display: block;
    cursor: pointer;
    background: transparent;
    border: none;
    z-index: 1000;
  }
`;
