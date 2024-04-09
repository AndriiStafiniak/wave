import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  overflow-y: auto;
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: #886cff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  font-family: "DM Sans";
  font-size: 15px;
  font-style: normal;
  max-width: 216px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const FormTitle = styled.h2`
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 116%;
  letter-spacing: -2px;
  text-align: center;
`;

export const FormSubtitle = styled.p`
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 156%;
  letter-spacing: -0.3px;
  margin-bottom: 60px;
  text-align: center;
  color: #374168;
`;
