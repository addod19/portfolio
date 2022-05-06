import React, { useState } from 'react';

import styled, { css } from 'styled-components';

const commonStyleBorder = css`
  border: none;
`;

const commonStyleWhiteColor = css`
  color: white;
`;

const FormWrapper = styled.div`
  width: 100%;
  @media only screen and (max-width: 600px){
    height: 450px;
    ${commonStyleBorder}
    width: 90%;
    margin: auto;
  }
`;
const Btn = styled.button`
  ${commonStyleBorder}
  ${commonStyleWhiteColor}
  width: 50%;
  margin-left: 25%;
  &:hover {
    ${commonStyleWhiteColor}
    background: black !important;
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
      <form id="contact-form" onSubmit={() => handleSubmit()} method="POST">
        <div className="form-group">
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              className="form-control"
              name="name"
              onChange={handleChange}
              value={name}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email address
            <input
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              className="form-control"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message
            <textarea
              className="form-control"
              name="message"
              onChange={handleChange}
              value={message}
              required
              rows="5"
            />
          </label>
        </div>
        <Btn
          type="submit"
          className="btn form-control mb-2"
        >
          Get In Touch
        </Btn>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;
