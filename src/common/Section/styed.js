import styled from "styled-components";

export const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.125rem; /* 50px */
  position: relative;
  max-width: 120rem; /* 1920px */
  width: 100%;
  margin: 0 auto;
  gap: 6.25rem; /* 100px */
  background-color: ${({ theme }) => theme.colors.header.background};

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem; /* 40px */
  max-width: 40%;

  @media (max-width: 1300px) {
    max-width: 90%;
    gap: 1.5rem;
  }
`;

export const Title = styled.h2`
  color: #000;
  margin-bottom: 1.25rem; /* 20px */
  font-size: 4.5rem; /* 72px */
  font-style: normal;
  font-weight: 500;
  line-height: 108%;
  letter-spacing: -0.125rem; /* -2px */

  @media (max-width: 1300px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  color: #7b88a8;
  font-family: "DM Sans";
  font-size: 1.125rem; /* 18px */
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
  letter-spacing: -0.01875rem; /* -0.3px */
`;

export const Button = styled.button`
  padding: 0.625rem 1.25rem; /* 10px 20px */
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 0.25rem; /* 4px */
  cursor: pointer;
  max-width: 9.6875rem; /* 155px */

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  max-width: 30.25rem; /* 484px */
  max-height: 36.5625rem; /* 585px */
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 900px) {
    max-width: 90%;
  }
`;
