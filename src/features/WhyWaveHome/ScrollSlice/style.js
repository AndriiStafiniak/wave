import styled from "styled-components";

export const TitleSection = styled.h3`
  color: #2d3958;
  text-align: center;
  font-family: Outfit;
  font-size: 4rem; /* 64px */
  font-style: normal;
  font-weight: 500;
  line-height: 7rem; /* 112px */
  letter-spacing: -0.125rem; /* -2px */

  @media (max-width: 900px) {
    font-size: 2.5rem;
    line-height: 4.5rem;
  }
`;

export const WrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem; /* 50px */
  margin: 6.25rem; /* 100px */

  @media (max-width: 900px) {
    margin: 4rem 1rem;
    gap: 2rem;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  border-radius: 1.25rem; /* 20px */
  background: #fff;
  box-shadow: 0px 1.25rem 3.125rem 0px rgba(79, 119, 255, 0.2);

  @media (max-width: 900px) {
    border-radius: 0.625rem;
  }
`;

export const Slide = styled.div`
  transition: transform 0.3s ease-in-out;
  text-align: center;
`;

export const SlideContent = styled.div`
  margin: 1.875rem; /* 30px */

  @media (max-width: 900px) {
    margin: 1rem;
  }
`;

export const ButtonNav = styled.button`
  width: 1.875rem; /* 30px */
  background-color: blue;
  color: white;

  @media (max-width: 900px) {
    width: 1.5rem;
  }
`;
