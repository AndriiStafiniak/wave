import styled from "styled-components";

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.5rem; /* 8px */
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  margin-bottom: 2rem;
  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 25rem; /* 400px */
`;

export const Input = styled.input`
  width: 65%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 2px solid #7b88a8;
  background-color: transparent;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 35%;
  padding: 0.75rem;
  border: none;
  background-color: #6200ea;
  color: white;
  border-radius: 0.25rem; /* 4px */
  cursor: pointer;

  &:hover {
    background-color: #5a00d1;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Disclaimer = styled.small`
  display: block;
  margin-top: 1rem;
  color: #666;
  text-align: center;
`;
