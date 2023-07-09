import './index.css';

function CustomModal({ children, closeModal, buttons }) {
  return (
    <div className="modal-shade">
      <div className="custom-modal">
        <div className="modal-content">
          {children}
        </div>
        <div className='modal-buttons'>
          <div className='custom-modal-buttons'>
            { buttons ? buttons() : '' }
          </div>
          <div>
            <button className={'close-button'} onClick={() => { closeModal() }}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
