import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 100%;
  max-width: 520px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const FormGroup = styled.div`
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #172b4d;
  font-size: 18px;
  font-weight: 500;
`;

const baseInputStyles = `
  width: 100%;
  min-height: 48px;
  padding: 10px 14px;
  border: 1px solid #c1c7d0;
  border-radius: 4px;
  background: #ffffff;
  color: #172b4d;
  font-size: 16px;
`;

const Input = styled.input`
  ${baseInputStyles}
`;

const TextArea = styled.textarea`
  ${baseInputStyles}
  min-height: 160px;
  resize: vertical;
`;

const Btn = styled.button`
  width: 100%;
  min-height: 48px;
  margin-top: 6px;
  border: none;
  border-radius: 4px;
  background: #ff985c;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #e77735;
  }
`;

const ContactForm = () => {
  const [sendMsg, setSendMsg] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = sendMsg;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => setSendMsg({ ...sendMsg, [e.target.name]: e.target.value });

  return (
    <FormWrapper>
      <Form id="contact-form" onSubmit={handleSubmit} method="POST">
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={name}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
            required
            rows="5"
          />
        </FormGroup>
        <Btn type="submit">
          Get In Touch
        </Btn>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
