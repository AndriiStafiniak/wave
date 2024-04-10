import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LineImage from "../../../images/icons/line.svg";

export const NavLinks = styled(NavLink)`
  text-align: center;
  font-family: Outfit;
  font-size: 60px;
  font-style: normal;
  font-weight: 500;
  line-height: 93%;
  letter-spacing: -2px;
  text-decoration: none;
  background: linear-gradient(186deg, #00e9e9 0.38%, #886cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 88px;
`;

export const ContainerLastSection = styled.div`
  min-height: 391px;
  background-color: #f8fafc;
  padding: 70px;
`;
export const ContentLas = styled.div`
  background-image: url(${LineImage});
  display: flex;
  justify-content: space-around;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
