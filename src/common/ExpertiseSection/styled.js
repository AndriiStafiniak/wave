import styled from "styled-components";

export const Section = styled.section`
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 3.125rem; /* 50px */
  position: relative;
  max-width: 120rem; /* 1920px */
  width: 100%;
  margin: 0 auto;
  gap: 1.25rem; /* 20px */
`;

export const Title = styled.h2`
  color: #16243e;
  font-family: Outfit;
  font-size: 4.5rem; /* 72px */
  font-style: normal;
  font-weight: 500;
  line-height: 6.75rem; /* 108px */
  letter-spacing: -0.125rem; /* -2px */

  @media (max-width: 1300px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const ContentTitle = styled.h3`
  font-size: 2.5rem; /* 40px */

  @media (max-width: 900px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const SubTitle = styled.h4`
  font-size: 1.875rem; /* 30px */

  @media (max-width: 1300px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const Description = styled.p`
  color: #374168;
  font-family: "DM Sans";
  font-size: 1.125rem; /* 18px */
  font-style: normal;
  font-weight: 400;
  line-height: 155.5%;
  letter-spacing: -0.01875rem; /* -0.3px */
  width: 40%;
  text-align: center;

  @media (max-width: 1300px) {
    text-align: center;
    width: 80%;
  }
`;

export const NumberBall = styled.div`
  color: #fff;
  text-align: center;
  font-family: "DM Sans";
  font-size: 1.25rem; /* 20px */
  font-style: normal;
  font-weight: 500;
  line-height: 155%;
  letter-spacing: -0.125rem; /* -2px */
  background-color: #886cff;
  border-radius: 50%;
  width: 1.875rem; /* 30px */
  height: 1.875rem; /* 30px */
  padding: 0;

  @media (max-width: 1300px) {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.8rem;
  }
`;
