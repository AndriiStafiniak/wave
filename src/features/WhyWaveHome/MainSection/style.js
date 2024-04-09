import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  padding-top: 176px;
  margin: 0 auto;
  display: flex;
  min-height: 555px;
  justify-content: space-around;
`;
export const ContainerImg = styled.div`
  position: relative;
`;
export const ContainerContent = styled.div`
  font-size: 18px;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const TitleContetn = styled.h3`
  font-family: Outfit;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 108px;
  letter-spacing: -2px;
`;
export const DesriptionContntent = styled.h3`
  color: #374168;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156%;
  letter-spacing: -0.3px;
`;
export const FirstImg = styled.img`
  position: absolute;
  z-index: 3;
`;

export const SecondtImg = styled.img`
  position: absolute;
  top: 180px;
  left: 194px;
  z-index: 5;
`;

export const Gradient = styled.img`
  position: absolute;
  background: linear-gradient(186deg, #61dcdf 0.38%, #886cff 100%);
  z-index: 1;
  top: 235px;
  left: -50px;
  width: 300px;
  height: 200px;
  border-radius: 5px;
`;
