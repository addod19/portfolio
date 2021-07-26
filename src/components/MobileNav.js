import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import styled from 'styled-components';

const Portfolio = styled.a``;
const About = styled.a``;
const Contact = styled.a``;
const WrapMobileLinks = styled.div``;
const CloseButton = styled.button``;

const MobileNav = ({ modalIsOpen, setModalIsOpen }) => {
  const handleClick = (componentName) => {
    setModalIsOpen(false);
    window.location.href = componentName;
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        content: {
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          border: 'none',
          background: '#fff',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '0',
          overflow: 'hidden',
          outline: 'none',
          padding: '20px',
          maxWidth: '100%',
        },
      }}
    >
      <WrapMobileLinks>
        <Portfolio href="#portfolio" onClick={() => handleClick('#portfolio')} />
        <About href="#about" onClick={() => handleClick('#about')} />
        <Contact href="#contact" onClick={() => handleClick('#contact')} />
      </WrapMobileLinks>
      <CloseButton type="button" onClick={() => setModalIsOpen(false)}>
        +
      </CloseButton>
    </Modal>
  );
};

MobileNav.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
};

export default MobileNav;
