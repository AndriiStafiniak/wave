import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const SubMenuContainerMain = styled.div`
  position: relative;
`;

export const SubMenuLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-family: Outfit;
  font-size: 0.9375rem; /* 15px */
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -0.01875rem; /* -0.3px */
  text-transform: uppercase;
  position: relative;
  z-index: 10;
  color: #b7b7b7;
  @media (max-width: 900px) {
    gap: 1.5rem;
    font-size: 1rem;
  }
`;

export const SubNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.25rem;
  z-index: 12;
  background-color: rgba(2, 2, 2, 0.7);
  padding: 10px;

  position: fixed;

  @media (max-width: 900px) {
    gap: 1.5rem;
    bottom: 30px;
    right: 30px;
  }
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  margin-right: 10px;

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