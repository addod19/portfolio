import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled, { css } from 'styled-components';

const commonBgColor = css`
  background: #FF985C;
`;

const commonColor1 = css`
  color: #F55800;
`;
const commonRelativePos = css`
  position: relative;
`;

const commonFont1 = css`
  font-size: 16px;
`;

const commonFont2 = css`
  font-size: 30px;
`;
const Title = styled.h2`
  text-align: center;
  color: black;
  width: 100%;
  ${commonRelativePos}
  left: -280px;
`;
const Live = styled.a`
  ${commonFont2}
  ${commonColor1}
  width: 200px;
  height: auto;
  ${commonBgColor}
  &:hover {
    color: black !important;
    text-decoration: none;
  }
  @media only screen and (max-width: 600px) {
    f${commonFont1}
  }
`;

const Code = styled.a`
  ${commonFont2}
  ${commonColor1}
  ${commonBgColor}
  &:hover {
    color: black !important;
    text-decoration: none;
  }
  @media only screen and (max-width: 600px) {
    ${commonFont1}
    width: 100px;
  }
`;

const ModalW = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    ${commonRelativePos}
    left: -15px;
  }
`;

const MobileLink = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`;

const CloseBtn = styled.button`
  @media only screen and (max-width: 600px) {
    ${commonRelativePos}
    left: -40px;
  }
`;
const modalClassNames = 'p-2 my-2 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl flex justify-center text-center';

const CustomModal = ({
  modalIsOpen, setModalIsOpen, imageUrl, title, description, codeLink, liveUrl,
}) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => setModalIsOpen(false)}
    style={{
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#c1c7d0',
        opacity: '0.9',
      },
      content: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        border: '1px solid #ebecf0',
        boxShadow: '0px 48px 48px rgba(37, 47, 137, 0.08)',
        background: '#fff',
        margin: '1rem auto',
        overflow: 'hidden',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '8px',
        width: '40vw',
        maxWidth: '100%',
        minWidth: '340px',
        outline: 'none',
        padding: '25px 20px',
        height: 'max-content',
      },
    }}
  >
    <CloseBtn
      type="button"
      onClick={() => setModalIsOpen(false)}
      className="close close-modal absolute text-5xl transform rotate-45 cursor-pointer"
    >
      +
    </CloseBtn>
    <ModalW>
      <Title>
        {title}
      </Title>
      <div className="h-auto modalImg">
        <img src={imageUrl} alt="" className="object-cover max-w-full" />
      </div>
      <p className="text-justify">{description}</p>
      <MobileLink className="project-info pt-6 items-center">
        <Live
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className={`${modalClassNames} mr-3 hidden lg:flex`}
        >
          Live
        </Live>
        <Code
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          type="button"
          className={`${modalClassNames} hidden lg:flex`}
        >
          Code
        </Code>
      </MobileLink>
    </ModalW>
  </Modal>
);

CustomModal.defaulProps = {
  title: '',
  description: '',
  codeLink: '',
  imageUrl: '',
  liveUrl: ''
}

CustomModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  codeLink: PropTypes.string,
  imageUrl: PropTypes.string,
  liveUrl: PropTypes.string,
};

export default CustomModal;
