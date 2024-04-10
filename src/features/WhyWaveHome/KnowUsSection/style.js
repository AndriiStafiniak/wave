import { styled } from "styled-components";

export const WrapperStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 70px;
  margin-top: 150px;
`;

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const DescriptionStyled = styled.div`
  color: #374168;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 162%;
  width: 50%;
`;
export const Picture = styled.img`
  max-width: 400px;
`;
