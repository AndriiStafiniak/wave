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
  background-color: ${({ theme }) => theme.colors.header.background};
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

export const ImageContainer = styled.div`
  max-width: 484px;
  max-height: 585px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(45deg, #f06, #aaf);
  position: absolute;

  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`;
