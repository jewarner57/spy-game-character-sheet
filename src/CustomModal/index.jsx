import './index.css';

function CustomModal({ children, closeModal }) {
  return (
    <div className="modal-shade">
      <div className="custom-modal">
        <div className="modal-content">
          {children}
        </div>
        <div className='modal-buttons'>
          <button className={'close-button'} onClick={() => { closeModal() }}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
