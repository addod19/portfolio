import React, {useState, useEffect} from 'react';

import axios from 'axios';
import styled from "styled-components";

const FormWrapper = styled.div`
  
  @media(max-width: 769px) {
    height: 450px;
    border: none;
  }
`;
const Btn = styled.button`
  border: none;
  &:hover {
    color: white;
  }
`;
const ContactForm = () => {

  const [sendMsg, setSendMsg] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [senders, setSenders] = useState([]);

  console.log();

  const { name, email, message } = sendMsg;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  sendMsg
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  const handleChange = e => setSendMsg({ ...sendMsg, [e.target.name]: e.target.value });
  
  return ( 
    <FormWrapper>
      <form id="contact-form" onSubmit={() => handleSubmit()} method="POST">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" name="name" onChange={handleChange} value={name} required/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email"  value={email} name="email" onChange={handleChange} className="form-control" required />
        </div>
        <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" name="message" onChange={handleChange} value={message} required rows="5"></textarea>
        </div>
        <Btn type="submit" className="btn form-control mb-2">Submit</Btn>
      </form>
    </FormWrapper>
  );
}
 
export default ContactForm;