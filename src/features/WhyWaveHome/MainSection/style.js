import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem; /* 1920px */
  padding-top: 11rem; /* 176px */
  margin: 0 auto;
  display: flex;
  min-height: 34.6875rem; /* 555px */
  justify-content: space-around;

  @media (max-width: 1350px) {
    flex-direction: column;
    padding-top: 5rem;
    align-items: center;
    gap: 2rem;
  }
`;

export const ContainerImg = styled.div`
  position: relative;
`;

export const ContainerContent = styled.div`
  font-size: 1.125rem; /* 18px */
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 3.125rem; /* 50px */
  margin-left: 200px;

  @media (max-width: 1350px) {
    width: 80%;
    gap: 2rem;
    margin: 0%;
  }
`;

export const TitleContetn = styled.h3`
  font-family: Outfit;
  font-size: 4.5rem; /* 72px */
  font-style: normal;
  font-weight: 500;
  line-height: 6.75rem; /* 108px */
  letter-spacing: -0.125rem; /* -2px */

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const DesriptionContntent = styled.h3`
  color: #374168;
  font-family: "DM Sans";
  font-size: 1.125rem; /* 18px */
  font-style: normal;
  font-weight: 400;
  line-height: 156%;
  letter-spacing: -0.01875rem; /* -0.3px */

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const FirstImg = styled.img`
  position: absolute;
  z-index: 3;

  @media (max-width: 1350px) {
    position: relative;
    margin-top: 2rem;
    width: 80%;
    left: 10%;
    top: auto;
  }
`;

export const SecondtImg = styled.img`
  position: absolute;
  top: 11.25rem; /* 180px */
  left: 12.125rem; /* 194px */
  z-index: 5;

  @media (max-width: 1350px) {
    position: relative;
    margin-top: 1rem;
    width: 60%;
    left: 20%;
    top: auto;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  background: linear-gradient(186deg, #61dcdf 0.38%, #886cff 100%);
  z-index: 1;
  top: 14.6875rem; /* 235px */
  left: -3.125rem; /* -50px */
  width: 18.75rem; /* 300px */
  height: 12.5rem; /* 200px */
  border-radius: 0.3125rem; /* 5px */

  @media (max-width: 1350px) {
    position: relative;
    margin-top: 1rem;
    width: 70%;
    left: 15%;
    top: auto;
  }
`;
