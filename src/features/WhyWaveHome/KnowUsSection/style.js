import styled from "styled-components";

export const WrapperStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 4.375rem; /* 70px */
  margin-top: 9.375rem; /* 150px */

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    margin-top: 4rem;
  }
`;

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem; /* 30px */
`;

export const DescriptionStyled = styled.div`
  color: #374168;
  font-family: "DM Sans";
  font-size: 1rem; /* 16px */
  font-style: normal;
  font-weight: 400;
  line-height: 162%;
  width: 50%;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

export const Picture = styled.img`
  max-width: 25rem; /* 400px */

  @media (max-width: 900px) {
    max-width: 350px;
  }
`;
