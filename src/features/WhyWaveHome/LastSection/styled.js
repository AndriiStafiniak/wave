import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LineImage from "../../../images/icons/line.svg";

export const NavLinks = styled(NavLink)`
  text-align: center;
  font-family: Outfit;
  font-size: 3.75rem; /* 60px */
  font-style: normal;
  font-weight: 500;
  line-height: 93%;
  letter-spacing: -0.125rem; /* -2px */
  text-decoration: none;
  background: linear-gradient(186deg, #00e9e9 0.38%, #886cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  width: 100%;
  margin: 5.5rem; /* 88px */

  @media (max-width: 1300px) {
    font-size: 2rem;
    margin: 2rem;
  }
`;

export const ContainerLastSection = styled.div`
  min-height: 24.4375rem; /* 391px */
  background-color: #f8fafc;
  padding: 4.375rem; /* 70px */

  @media (max-width: 1300px) {
    padding: 1rem;
  }
`;

export const ContentLas = styled.div`
  background-image: url(${LineImage});
  display: flex;
  justify-content: space-around;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media (max-width: 1300px) {
    flex-direction: column;
    width: 80%;
  }
`;
