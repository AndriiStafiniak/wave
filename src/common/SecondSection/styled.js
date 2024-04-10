import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.125rem;
  position: relative;
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  gap: 6.25rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  background-image: linear-gradient(to right, #00e9e9, #857fff);
  width: 36.875rem;
  height: 34.6875rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 900px) {
    width: 80%;
    height: auto;
  }
`;

export const ContentWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem; /* 20px */

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const Title = styled.h2`
  color: #16243e;
  font-family: Outfit;
  font-size: 4.5rem; /* 72px */
  font-style: normal;
  font-weight: 500;
  line-height: 108%;
  letter-spacing: -0.125rem; /* -2px */

  @media (max-width: 900px) {
    font-size: 3rem;
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
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li``;

export const Dot = styled.span`
  height: 0.625rem; /* 10px */
  width: 0.625rem; /* 10px */
  background-color: #00bcd4;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
`;

export const Img = styled.img`
  width: 35.625rem; /* 570px */
  height: 33.375rem; /* 534px */

  @media (max-width: 900px) {
    width: 80%;
    height: auto;
  }
`;

export const ExtraArrowText = styled.p`
  color: #374168;
  font-family: "DM Sans";
  font-size: 1.125rem; /* 18px */
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.25rem; /* 4px */
  text-transform: uppercase;
`;

export const ListItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px */
`;

export const ExtraContentContainerArrow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem; /* 10px */
`;
