import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 31.25rem; /* 500px */
  margin: 0 auto;
  padding: 1.25rem; /* 20px */
  display: flex;
  flex-direction: column;
  gap: 1.875rem; /* 30px */

  @media (max-width: 1300px) {
    padding: 1rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.625rem; /* 10px */
`;

export const Input = styled.input`
  padding: 0.625rem; /* 10px */
  border: 1px solid #ccc;
  border-radius: 0.3125rem; /* 5px */
  margin-bottom: 0.625rem; /* 10px */
`;

export const Textarea = styled.textarea`
  padding: 0.625rem; /* 10px */
  border: 1px solid #ccc;
  border-radius: 0.3125rem; /* 5px */
  resize: none;
  overflow-y: auto;
`;

export const Button = styled.button`
  padding: 0.625rem 1.25rem; /* 10px 20px */
  background-color: #886cff;
  border: none;
  border-radius: 0.3125rem; /* 5px */
  cursor: pointer;
  text-align: center;
  font-family: "DM Sans";
  font-size: 0.9375rem; /* 15px */
  color: #fff;
  max-width: 13.5rem; /* 216px */
  transition: 0.2s;
  &:hover {
    filter: brightness(120%);
  }

  @media (max-width: 1300px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: -0.625rem; /* -10px */
  margin-bottom: 0.625rem; /* 10px */
`;

export const FormTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  letter-spacing: -0.125rem;

  @media (max-width: 900px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const FormSubtitle = styled.p`
  font-family: "DM Sans";
  font-size: 1.125rem;
  margin-bottom: 3.75rem;
  text-align: center;
  color: #374168;

  @media (max-width: 1300px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: center;
  }
`;
