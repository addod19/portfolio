import React, {useState, useEffect} from 'react';

import axios from 'axios';
import { set } from 'gsap';

const ContactForm = () => {
  // const [name, email, message] = props;
  // console.log(props);

  // const [name, setName] = useState('Enter Name');
  // const [email, setEmail] = useState('Enter Email');
  // const [message, setMessage] = useState('Enter Message');
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
    // console.warn(e.target.name);
    // if (name && email && message) {
    //   const sender = { id: new Date().getTime().toString(), name, email, message };
    //   console.log(sender);
    //   setSendMsg((...sendMsg) => {
    //     return [...sendMsg, sender];
    //   });
    //   setSendMsg({});
    // } else {
    //   console.log('empty values');
    // }

    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
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
  // const handleEmailChange = e => setEmail({ ...formData, [e.target.name]: e.target.value });
  // const handleMessageChange = e => setMessage({ ...formData, [e.target.name]: e.target.value });
  return ( 
    <>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
 
export default ContactForm;