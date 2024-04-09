import styled from "styled-components";

export const Section = styled.section`
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  position: relative;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  gap: 150px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 70px;
`;
export const ImageWrapper = styled.div`
  position: relative;
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
export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 140px;
`;
export const Img = styled.img`
  width: 400px;
  height: 350px;
  position: absolute;
  z-index: 10;
  border-radius: 20px;
  top: 0;
  left: -16px;
`;
export const BgImg = styled.img`
  width: 320px;
  height: 240px;
  position: relative;
  z-index: 5;
  border-radius: 20px;
`;

export const Content = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ContentTitle = styled.h3`
  font-size: 40px;
`;
