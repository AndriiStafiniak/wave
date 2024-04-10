import { styled } from "styled-components";

export const WrapperStyled = styled.section`
  background-color: #fff;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1920px;
  margin: 100px auto;
`;

export const Title = styled.h3`
  text-align: center;

  font-family: Outfit;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 112%;
  letter-spacing: -2px;
  background: linear-gradient(186deg, #61dcdf 0.38%, #886cff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const SubTitle = styled.h3`
  color: #212121;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Outfit;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 112%;
  letter-spacing: -2px;
`;
export const Paragraph = styled.p`
  color: #616161;
  text-align: center;
  font-family: "DM Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150px;
`;
export const SliceContener = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
export const Slice = styled.div`
  width: 450px;
  height: 318px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 36px;
  box-shadow: 0px 6px 30px 0px rgba(33, 33, 33, 0.08);
`;
export const SliceTitle = styled.h4`
  color: #212121;
  text-align: center;
  font-family: Outfit;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 127px;
  letter-spacing: -1px;
`;
export const SliceParagraph = styled.p`
  color: #616161;
  text-align: center;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 155%;
`;
