import React from 'react';
import { FaFacebook, FaGithub, FaLinkedinIn, FaMedium, FaTwitter } from 'react-icons/fa';

import styled from 'styled-components';
import MyContact from './ContactForm';

const ContactWrap = styled.div`
  width: 100%;
  height: 550px;
  // border: 1px solid red;

  @media(max-width: 768px) {
    border: none;
    width: 100%;
  }
`;

const Main = styled.main`
  height: 450px;
  display: grid;
  grid-template-column: repeat(2, 1fr);
  // border: 1px solid green;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: row;
    border: none;
  }
`;

const Divider = styled.div`
  position: relative;
  height: 1px;
  left: 0px;
  right: 0px;
  top: 0px;

  /* Neutrals/N40 */

  background: #DFE1E6;
`;

const FooterLinks = styled.footer`
  height: 90px;
  display: flex;
  justify-content: center;
  // margin-top: 45px;
`;

const ContactMsg = styled.div`
  position: relative;
  width: 455px;
  height: 356px;
  left: 0px;
  top: 0px;
  // border: 1px solid red;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 52px;
  /* or 130% */

  display: flex;
  align-items: center;

  color: #262626;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;

  @media(max-width: 768px) {
    border: none;
    font-size: 23px;
    line-height: 25px;
  }
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  // border: 1px solid black;

  position: relative;
  width: 584px;
  left: 679px;
  top: -380px;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: flex-start;
  flex-grow: 0;
  margin: 24px 0px;
`;

const Wrp = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 30%;
  height: 50px;
  margin-top: 40px;
`;
const AColor = styled.a`
  color: #CFCFCF;

  &:hover {
    color: #F55800;
  }

  @media(max-width: 768px) {
    transform: rotate(100deg);
  }
`;

const SLinks = styled.li`
  color: #CFCFCF;

`;
const Contact = () => {

  return ( 
    <ContactWrap id="contact" className="container">
      <Main className="row">
        <ContactMsg className="col-sm-12 col-xs-12">
          I'm always interested in hearing about new projects, 
          so if you'd like to chat please get in touch.
        </ContactMsg>
        <ContactForm className="col-sm-12 col-xs-12">
          <MyContact />
        </ContactForm>
      </Main>
      <Divider></Divider>
      <FooterLinks>
        <Wrp>
          <SLinks>
            <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
              <FaFacebook className="rot"/>
            </AColor>  
          </SLinks>
          <SLinks>
            <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
              <FaGithub className="rot"/>
            </AColor>  
          </SLinks>
          <SLinks>
            <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
              <FaLinkedinIn className="rot"/>
            </AColor>  
          </SLinks>
          <SLinks>
            <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
              <FaMedium className="rot"/>
            </AColor>  
          </SLinks>
          <SLinks>
            <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
              <FaTwitter className="rot"/>
            </AColor>  
          </SLinks>
        </Wrp>
      </FooterLinks>
    </ContactWrap>
  );
}
 
export default Contact;