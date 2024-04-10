import { styled } from "styled-components";
import { ReactComponent as Icon } from "../../../images/icons/secIcon.svg";
export const WrapperContactSection = styled.section`
  background-color: #f5faff;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
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
  font-size: 90px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
`;
export const StyledIcon = styled(Icon)`
  position: absolute;
  width: 230px;
  height: 230px;
  top: 100px;
  right: 250px;
`;
