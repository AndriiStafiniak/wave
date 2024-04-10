import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SubMenuLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.header.navLinkColor};
  font-family: Outfit;
  font-size: 0.9375rem; /* 15px */
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.01875rem; /* -0.3px */
  text-transform: uppercase;
  position: relative;
  @media (max-width: 900px) {
    gap: 1.5rem;
    color: #b7b7b7;
    font-size: 2rem;
  }
`;

export const SubNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;
  position: fixed;
  top: 10px;
  right: 10px;

  @media (max-width: 900px) {
    gap: 1.5rem;
  }
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  margin-right: 6px;

  @media (max-width: 900px) {
    gap: 1.5rem;
    color: white;
    font-size: 2rem;
    font-size: 25px;
  }
`;

export const SubMenuTitle = styled.div`
  font-family: Outfit;
  font-size: 0.9375rem; /* 15px */
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.01875rem; /* -0.3px */
  text-transform: uppercase;
  @media (max-width: 900px) {
    gap: 1.5rem;
    color: #b7b7b7;
    font-size: 2rem;
  }
`;
