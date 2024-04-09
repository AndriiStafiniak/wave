import styled from "styled-components";
export const MainTitle = styled.h2`
  color: #2d3958;
  text-align: center;
  font-family: Outfit;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 116px;
  letter-spacing: -2px;
`;
export const SectionStyle = styled.section`
  background-color: #f8fafc;
  max-width: 1920px;
  margin: 50px auto;
  padding: 15px;
  height: 700px;
`;

export const ListInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
  justify-content: end;
`;
export const WrapperMain = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const ImageContainer = styled.div`
  position: relative;
`;
export const Image = styled.img`
  z-index: 3;
  position: absolute;
`;
export const GradientObject = styled.div`
  position: absolute;
  background-color: #f2f3f5;
  width: 145px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  bottom: -95px;
  left: -70px;
  z-index: 5;
`;
export const Figure = styled.p`
  border: 50px solid #00e9e9;
  width: 400px;
  height: 400px;
  transform: rotate(45deg);
  position: absolute;
  z-index: 1;
`;
export const ExtraObjectContent = styled.span`
  color: #61dcdf;
  font-family: Jost;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -1.92px;
`;
export const ExtraObjectContentText = styled.span`
  color: #16243e;
  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.8px;
`;

export const ExtraListContent = styled.span`
  color: #16243e;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140px;
  letter-spacing: -0.8px;
`;
