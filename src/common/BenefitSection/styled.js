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
  gap: 9.375rem; /* 150px */

  @media (max-width: 900px) {
    padding: 2rem;
    gap: 5rem;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 4.375rem; /* 70px */

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const Description = styled.p`
  color: #374168;
  font-family: "DM Sans";
  font-size: 1.125rem; /* 18px */
  font-style: normal;
  font-weight: 400;
  line-height: 155.5%;
  letter-spacing: -0.01875rem; /* -0.3px */
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 8.75rem; /* 140px */

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const Img = styled.img`
  width: 25rem; /* 400px */
  height: 21.875rem; /* 350px */
  position: absolute;
  z-index: 10;
  border-radius: 1.25rem; /* 20px */
  top: 0;
  left: -1rem; /* -16px */

  @media (max-width: 900px) {
    width: 20rem;
    height: 17.5rem;
    left: 0;
  }
`;

export const BgImg = styled.img`
  width: 20rem; /* 320px */
  height: 15rem; /* 240px */
  position: relative;
  z-index: 5;
  border-radius: 1.25rem; /* 20px */
`;

export const Content = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* 20px */

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const ContentTitle = styled.h3`
  font-size: 2.5rem; /* 40px */

  @media (max-width: 900px) {
    font-size: 2rem;
    text-align: center;
  }
`;
