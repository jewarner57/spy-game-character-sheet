import { useState } from 'react';
import CustomModal from '../CustomModal';
import './index.css';

function Navbar({ downloadJson, uploadJson, characterList, currentCharacter, setCharacter, createNewCharacter }) {
  const [modalOpen, setModalOpen] = useState(false);

  const hasViewedHelp = localStorage.getItem('viewed-help')
  const setViewedHelp = () => {
    localStorage.setItem('viewed-help', true)
  }

  return (
    <div className="navbar">
        <nav>
          <ul>
            <div className="saved-characters">
              <li className='saved-characters-header'>Saved Characters: </li>
              {characterList.map((char) => {
                return (
                  <li className={`${char === currentCharacter ? 'selected-char' : ''}`} key={char}>
                    <a onClick={() => setCharacter(char)} >
                      {JSON.parse(localStorage.getItem(char))?.Codename || `Untitled-${char.substring(8, 15)}`}
                    </a>
                  </li>
                )
              })}
            <div className='new-character-button' onClick={() => createNewCharacter()}>
              <div>+</div>
            </div>
            </div>
          <div className={`help-button ${!hasViewedHelp && 'help-button-first-open'}`} onClick={() => { setModalOpen(true); setViewedHelp() }}>?</div>
          </ul>
          
        </nav>
        { modalOpen && <CustomModal className="instruction-modal" closeModal={() => {setModalOpen(false)}}>
          <h1 className="instruction-text">Mission Briefing</h1>
          <p className="instruction-text">How to use this character sheet:</p>
          <div className='instruction-text instruction-body'>
            <h2 className="instruction-text">Create or upload a new character:</h2>
            <p className="instruction-text">Use the + button on the top left of the screen. You can name your new character by filling out the codename field on the sheet</p>
            <h2 className="instruction-text">Save or share a character:</h2>
            <p className="instruction-text">Characters are saved automatically in browser local storage. If you want to download them for safe keeping or sharing for using on another computer, you can use the download button in the top corner of the character sheet.</p>
          </div>
        </CustomModal>}
    </div>
  );
}

export default Navbar;
