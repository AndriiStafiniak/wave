import styled from "styled-components";

export const AllContent = styled.main``;

export const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.125rem; /* 50px */
  position: relative;
  width: 100%;
  gap: 6.25rem; /* 100px */
  background-color: #f5faff;
  box-sizing: border-box;

  @media (max-width: 1350px) {
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
  margin-left: 150px;

  @media (max-width: 1300px) {
    align-items: center;
    gap: 1.5rem;
    margin-left: 0;
    max-width: 100%;
  }
`;

export const Title = styled.h2`
  color: #000;
  margin-bottom: 1.25rem; /* 20px */
  font-size: 4.5rem; /* 72px */
  font-style: normal;
  font-weight: 500;
  line-height: 6.75rem; /* 108px */
  letter-spacing: -0.125rem; /* -2px */
  background: linear-gradient(186deg, #00e9e9 0.38%, #886cff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1300px) {
    font-size: 2rem;
    margin-bottom: 1rem;
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

  @media (max-width: 1350px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  padding: 0.625rem 1.25rem; /* 10px 20px */
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 0.25rem; /* 4px */
  cursor: pointer;
  max-width: 9.6875rem; /* 155px */
`;

export const SecondButton = styled.button`
  padding: 0.625rem 1.25rem;
  background-color: #eee;
  color: #212121;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  max-width: 9.6875rem;
`;

export const Img = styled.img`
  width: 35.625rem; /* 570px */
  height: 33.375rem; /* 534px */

  @media (max-width: 1300px) {
    width: 80%;
    height: auto;
  }
`;

export const ImageWrapper = styled.div`
  background-image: linear-gradient(to right, #00e9e9, #857fff);
  width: 36.875rem; /* 590px */
  height: 34.6875rem; /* 555px */
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 1300px) {
    width: 80%;
    height: auto;
  }
`;

export const ExtraTitleContent = styled.span`
  color: #8771fe;
  font-family: "DM Sans";
  font-size: 1.125rem; /* 18px */
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 28px */
  letter-spacing: -0.01875rem; /* -0.3px */
`;

export const SecondSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 3.125rem; /* 50px */
  position: relative;
  max-width: 120rem; /* 1920px */
  width: 100%;
  margin: 0 auto;
  gap: 6.25rem; /* 100px */
  background-color: #f5faff;
  height: 80vh;

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
  }
`;

export const TitleSpecial = styled.h3`
  color: #212121;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 2.25rem; /* 36px */
  font-style: normal;
  font-weight: 500;
  line-height: 127%;
  letter-spacing: -0.0625rem; /* -1px */

  @media (max-width: 1300px) {
    font-size: 1.75rem;
  }
`;

export const SpecialContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #374168;
  text-align: center;
  justify-content: center;
  font-family: "DM Sans";
  font-size: 1rem; /* 16px */
  font-style: normal;
  font-weight: 400;
  line-height: 162%;
  align-items: center;
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr)); /* 400px */
  padding: 4rem; /* 64px */
  row-gap: 5.625rem; /* 90px */
  column-gap: 6.875rem; /* 110px */
  margin-bottom: 3.125rem; /* 50px */

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    row-gap: 1rem;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.25rem; /* 20px */

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
