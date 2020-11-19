import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const modalClassNames = 'p-2 my-2 rounded bg-normal-green text-white focus:outline-none focus:bg-darker-green hover:shadow-xl flex justify-center text-center';

const CustomModal = ({modalIsOpen, setModalIsOpen, imageUrl, title, description, tech, codeLink, liveUrl}) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
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
      <button type="button" onClick={() => setModalIsOpen(false)} className="close close-modal absolute text-5xl transform rotate-45 cursor-pointer">+</button>
      <div className="content-area">
        <div className="h-auto">
          <img src={imageUrl} alt="" className="object-cover max-w-full" />
        </div>
        <div className="project-info pt-6 items-center">
          <h2 className="text-2xl font-semibold">
            {title}
          </h2>

          <a href={liveUrl} target="_blank" rel="noopener noreferrer" type="button" className={`${modalClassNames} mr-3 hidden lg:flex`}>
            See live
            <img src="/vectors/live.svg" alt="see live" className="pl-2" />
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" type="button" className={`${modalClassNames} hidden lg:flex`}>
            See Source
            <img src="/vectors/source.png" alt="source" className="pl-2" />
          </a>
        </div>
        <div className="flex flex-wrap items-center my-2 text-xs">
          {
            // tech.map(tec => <span key={tec} className="py-1 px-2 m-1 bg-light-green rounded">{tec}</span>)
          }
        </div>
        <p className="text-justify">{description}</p>

        <div className="flex justify-between items-center mt-1">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" type="button" className={`${modalClassNames} mr-2 w-40 md:hidden`}>
            See live
            <img src="/vectors/live.svg" alt="see live" className="pl-2" />
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" type="button" className={`${modalClassNames} w-40 md:hidden`}>
            See Source
            <img src="/vectors/source.png" alt="source" className="pl-2" />
          </a>
        </div>
      </div>
    </Modal>
  );
}

CustomModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  setModalIsOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  liveUrl: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
}

export default CustomModal;