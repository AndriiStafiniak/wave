import styled from "styled-components";

// Styled-components dla różnych elementów sekcji
export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  position: relative;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  gap: 100px;
`;

export const ImageWrapper = styled.div`
  background-image: linear-gradient(to right, #00e9e9, #857fff);
  width: 590px;
  height: 555px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ContentWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  color: #16243e;
  font-family: Outfit;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 108%;
  letter-spacing: -2px;
`;

export const Description = styled.p`
  color: #374168;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 155.5%;
  letter-spacing: -0.3px;
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li``;

export const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #00bcd4;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
`;
export const Img = styled.img`
  width: 570px;
  height: 534px;
`;
export const ExtraArrowText = styled.p`
  color: #374168;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 4px;
  text-transform: uppercase;
`;
export const ListItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const ExtraContentContainerArrow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
