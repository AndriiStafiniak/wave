import Slider from "react-slick";
import styled from "styled-components";

export const TitleSection = styled.h3`
  color: #2d3958;
  text-align: center;
  font-family: Outfit;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 112px;
  letter-spacing: -2px;
`;
export const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: 100px;
`;
export const SliderContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 20px 50px 0px rgba(79, 119, 255, 0.2);
`;

export const Slide = styled.div`
  transition: transform 0.3s ease-in-out;
  text-align: center;
`;

export const SlideContent = styled.div`
  margin: 30px;
`;

export const ButtonNav = styled.button`
  width: 30px;
  background-color: blue;
  color: white;
`;
