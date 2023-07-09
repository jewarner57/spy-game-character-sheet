// debug: characters are not overwriting correctly on opera browser
// - write up some instructions for how to use it that appear at first start
// or can be accessed view a question mark. 

import './App.css';
import { useState, useEffect, useCallback, useRef } from 'react';

import CharacterSheet from './CharacterSheet';
import Navbar from './Navbar';
import CustomModal from './CustomModal';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [sheetValues, setSheetValues] = useState({});
  const [currentCharacterID, setCurrentCharacterID] = useState();
  const [modalOpen, setModalOpen] = useState(false)
  const savedCharacters = Object.keys({ ...localStorage }).filter((key) => {
    return key.substring(0, 7) === 'spygame'
  });

  const hiddenFileInput = useRef(null);

  const handleUploadClick = event => {
    hiddenFileInput.current.click();
  };

  const downloadJson = () => {
    exportToJson();
  }

  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType })

    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
  }

  const exportToJson = () => {
    downloadFile({
      data: JSON.stringify(sheetValues),
      fileName: sheetValues?.Codename ? `${sheetValues?.Codename}.json` : `Untitled-${currentCharacterID.substring(8, 15)}.json`,
      fileType: 'text/json',
    })
  }

  const handleUploadChange = e => {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = e => {
        const loadedSheetObj = JSON.parse(e.target.result)
        
        const uploadedCharID = loadedSheetObj?.characterID || `spygame-${uuidv4()}`
        saveCharacterToLocalStorage(uploadedCharID, loadedSheetObj);
        loadCharacterFromID(uploadedCharID) 
      };
  };

  const deleteCurrentCharacter = () => {
    localStorage.removeItem(currentCharacterID);
    setCurrentCharacterID();
  }

  const createNewCharacter = () => {
    const id = `spygame-${uuidv4()}`
    loadCharacterFromID(id);
    saveCharacterToLocalStorage(id, { characterID: currentCharacterID })
  }

  const saveCharacterToLocalStorage = (id, characterObject) => {
    localStorage.setItem(id, JSON.stringify(characterObject));
  }

  const saveAndUpdateSheetValues = (value) => {
    setSheetValues({ ...value(sheetValues), characterID: currentCharacterID});
    saveCharacterToLocalStorage(currentCharacterID, value(sheetValues));
  }

  const loadCharacterFromID = useCallback((id) => {
    setCurrentCharacterID(id)
    setSheetValues(JSON.parse(localStorage.getItem(id)) || {})
  }, [])

  useEffect(() => {
    if (!currentCharacterID) {
      if (savedCharacters.length) {
        return loadCharacterFromID(savedCharacters[0])
      }
      return loadCharacterFromID(`spygame-${uuidv4()}`); 
    }
  }, [currentCharacterID, savedCharacters, loadCharacterFromID])

  return (
    <div className="App">
      <Navbar 
        characterList={savedCharacters} 
        currentCharacter={currentCharacterID} 
        setCharacter={loadCharacterFromID}
        createNewCharacter={() => setModalOpen(true)} 
      />
      <div className="page-body">
        <CharacterSheet sheetValues={sheetValues} setSheetValues={saveAndUpdateSheetValues} downloadSheet={downloadJson} deleteCharacter={deleteCurrentCharacter} />
      </div>
      {
      modalOpen && <CustomModal closeModal={() => setModalOpen(false)}>
        <div className='new-character-selector'>
          <div className='new-character-upload' onClick={(e) => handleUploadClick(e)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M10 9h-6l8-9 8 9h-6v11h-4v-11zm11 11v2h-18v-2h-2v4h22v-4h-2z" /></svg>
            Upload character file
            <input ref={hiddenFileInput} type="file" style={{ display: 'none' }} onChange={(e) => { handleUploadChange(e); setModalOpen(false) }} />
          </div>
          <div className='new-character-blank' onClick={() => {createNewCharacter(); setModalOpen(false);}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 24 24"><path d="M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h10.189c3.163 0 9.811 7.223 9.811 9.614v3.887c-.624-.261-1.297-.422-2-.476v-2.569c0-4.106-6-2.456-6-2.456s1.518-6-2.638-6h-7.362v20h9.501c.313.749.765 1.424 1.319 2z" /></svg>
            New blank character
          </div>
        </div>
      </CustomModal>
      }
    </div>
  );
}

export default App;
