import styled from "styled-components";

export const MainTitle = styled.h2`
  color: #2d3958;
  text-align: center;
  font-family: Outfit;
  font-size: 3rem; /* 48px */
  font-style: normal;
  font-weight: 500;
  line-height: 7.25rem; /* 116px */
  letter-spacing: -0.125rem; /* -2px */

  @media (max-width: 900px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const SectionStyle = styled.section`
  background-color: #f8fafc;
  max-width: 120rem; /* 1920px */
  margin: 3.125rem auto; /* 50px auto */
  padding: 0.9375rem; /* 15px */
  height: 43.75rem; /* 700px */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1300px) {
    padding: 1rem;
    height: auto;
    margin: 2rem auto;
  }
`;

export const ListInfo = styled.div`
  display: flex;
  gap: 0.5rem; /* 8px */
  align-items: baseline;
  justify-content: end;
  margin: 50px 0;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    max-width: 300px;
  }
`;

export const WrapperMain = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1300px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  z-index: 3;
  position: absolute;

  @media (max-width: 1300px) {
    position: static;
    max-width: 80%;
  }
`;

export const GradientObject = styled.div`
  position: absolute;
  background-color: #f2f3f5;
  width: 9.0625rem; /* 145px */
  height: 10rem; /* 160px */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.3125rem; /* 5px */
  border-radius: 0.3125rem; /* 5px */
  bottom: -5.9375rem; /* -95px */
  left: -4.375rem; /* -70px */
  z-index: 5;

  @media (max-width: 1300px) {
    position: static; 
    margin-top: 1rem; 
    width: 80%; 
    height: auto; 
    bottom: auto; 
    left: auto; /
  }
`;

export const Figure = styled.p`
  border: 3.125rem solid #00e9e9; /* 50px */
  width: 25rem; /* 400px */
  height: 25rem; /* 400px */
  transform: rotate(45deg);
  position: absolute;
  z-index: 1;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const ExtraObjectContent = styled.span`
  color: #61dcdf;
  font-family: Jost;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: -0.12rem; /* -1.92px */

  @media (max-width: 1300px) {
    font-size: 2rem;
  }
`;

export const ExtraObjectContentText = styled.span`
  color: #16243e;
  text-align: center;
  font-family: Jost;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.05rem; /* -0.8px */

  @media (max-width: 1300px) {
    font-size: 1rem;
  }
`;

export const ExtraListContent = styled.span`
  color: #16243e;
  font-family: Jost;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 8.75rem;
  letter-spacing: -0.05rem;

  @media (max-width: 1300px) {
    line-height: normal;
  }
`;
