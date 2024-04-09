import {
  Button,
  Description,
  Disclaimer,
  Input,
  NewsletterContainer,
  Title,
  Form,
} from "./styled";
import { useState } from "react";

export const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      console.log("Email is valid:", email);
    } else {
      setError("Please enter a valid email address.");
    }
  };

  return (
    <NewsletterContainer>
      <Title>Newsletter</Title>
      <Description>
        Subscribe to our newsletter to keep up to date on our marketing,
        website, design services, and tips.
      </Description>
      <Form onSubmit={handleSubmit}>
        <p>
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <Button>SUBMIT</Button>
        </p>
        {error && <Disclaimer>{error}</Disclaimer>}
      </Form>
      <Disclaimer>
        We hate spam as much as you do. We will never, ever send you such
        emails.
      </Disclaimer>
    </NewsletterContainer>
  );
};
