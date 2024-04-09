import { styled } from "styled-components";

export const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  position: relative;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  gap: 100px;
  background-color: #f5faff;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 40%;
`;

export const Title = styled.h2`
  color: #000;
  margin-bottom: 20px;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 108%;
  letter-spacing: -2px;
  background: linear-gradient(186deg, #00e9e9 0.38%, #886cff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Description = styled.p`
  color: #7b88a8;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
  letter-spacing: -0.3px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  max-width: 155px;
`;
export const Img = styled.img`
  width: 570px;
  height: 534px;
`;
export const ImageWrapper = styled.div`
  background-image: linear-gradient(to right, #00e9e9, #857fff);
  width: 590px;
  height: 555px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const ExtraTitleContent = styled.span`
  color: #8771fe;

  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.3px;
`;
export const SecondSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 50px;
  position: relative;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  gap: 100px;
  background-color: #f5faff;
  height: 80vh;
`;
export const TitleSpecial = styled.h3`
  font-size: 48px;
`;
export const SpecialContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
`;
