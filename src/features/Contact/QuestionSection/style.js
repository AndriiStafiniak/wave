import styled from "styled-components";

export const WrapperStyled = styled.section`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 120rem; /* 1920px */
  margin: 6.25rem auto; /* 100px auto */

  @media (max-width: 1300px) {
    margin: 4rem auto;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-family: Outfit;
  font-size: 4rem; /* 64px */
  font-style: normal;
  font-weight: 500;
  line-height: 112%;
  letter-spacing: -0.125rem; /* -2px */
  background: linear-gradient(186deg, #61dcdf 0.38%, #886cff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1300px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h3`
  color: #212121;
  text-align: center;
  font-family: Outfit;
  font-size: 4rem; /* 64px */
  font-style: normal;
  font-weight: 500;
  line-height: 112%;
  letter-spacing: -0.125rem; /* -2px */

  @media (max-width: 1300px) {
    font-size: 2.5rem;
  }
`;

export const Paragraph = styled.p`
  color: #616161;
  text-align: center;
  font-family: "DM Sans";
  font-size: 1.25rem; /* 20px */
  font-style: normal;
  font-weight: 400;
  line-height: 9.375rem;

  @media (max-width: 1300px) {
    font-size: 1rem;
    line-height: normal;
    max-width: 50%;
  }
`;

export const SliceContener = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.875rem; /* 30px */

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

export const Slice = styled.div`
  width: 28.125rem; /* 450px */
  height: 19.875rem; /* 318px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3.75rem 2.25rem; /* 60px 36px */
  box-shadow: 0px 6px 30px 0px rgba(33, 33, 33, 0.08);

  @media (max-width: 1300px) {
    width: 100%;
    height: auto;
    padding: 2rem 1rem;
  }
`;

export const SliceTitle = styled.h4`
  color: #212121;
  text-align: center;
  font-family: Outfit;
  font-size: 2.25rem; /* 36px */
  font-style: normal;
  font-weight: 500;
  line-height: 7.9375rem;
  letter-spacing: -0.0625rem; /* -1px */

  @media (max-width: 1300px) {
    font-size: 1.75rem;
    line-height: normal;
  }
`;

export const SliceParagraph = styled.p`
  color: #616161;
  text-align: center;
  font-family: "DM Sans";
  font-size: 1.125rem; /* 18px */
  font-style: normal;
  font-weight: 400;
  line-height: 155%;

  @media (max-width: 1300px) {
    font-size: 1rem;
  }
`;
