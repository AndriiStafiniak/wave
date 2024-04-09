import { useEffect, useState } from "react";
import {
  Button,
  ErrorMessage,
  FormContainer,
  FormSubtitle,
  FormTitle,
  Input,
  StyledForm,
  Textarea,
} from "./styled";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(validate(formData)).length === 0) {
      console.log("Form data is valid! Submitting form...", formData);

      console.log(
        "Form data is invalid! Fix errors before submitting.",
        errors
      );
    }
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name.trim()) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  return (
    <FormContainer>
      <FormTitle>Contact us today</FormTitle>
      <FormSubtitle>
        Don't let managing all aspects of your business overwhelm you any
        longer. Let Wave handle it for you. Contact us today to learn more about
        our outsourcing services and how they can benefit your business.
      </FormSubtitle>
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        <Input
          type="email"
          name="email"
          placeholder="Enter Your Mail"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Input
          type="text"
          name="topic"
          placeholder="Enter Your Topic"
          value={formData.topic}
          onChange={handleInputChange}
        />
        <Textarea
          name="message"
          rows="5"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleInputChange}
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        <Button type="submit">Send Message</Button>
      </StyledForm>
    </FormContainer>
  );
};
