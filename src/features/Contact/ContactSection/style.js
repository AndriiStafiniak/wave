import styled from "styled-components";
import { ReactComponent as Icon } from "../../../images/icons/secIcon.svg";

export const WrapperContactSection = styled.section`
  background-color: #f5faff;
  height: 31.25rem; /* 500px */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 120rem; /* 1920px */
  margin: 0 auto;
  position: relative;
`;

export const WrapperContact = styled.div``;

export const TitleContactSection = styled.h2`
  text-align: center;
  background: linear-gradient(186deg, #61dcdf 0.38%, #886cff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Hind;
  font-size: 5.625rem; /* 90px */
  font-style: normal;
  font-weight: 600;
  line-height: 100%;

  @media (max-width: 900px) {
    font-size: 3.75rem;
  }
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  width: 14.375rem; /* 230px */
  height: 14.375rem; /* 230px */
  top: 6.25rem; /* 100px */
  right: 15.625rem; /* 250px */

  @media (max-width: 900px) {
    width: 10rem;
    height: 10rem;
    top: 4rem;
    right: 10rem;
  }
`;
