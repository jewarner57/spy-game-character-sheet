// - should be the codename, 
// - should be able to delete character on opera browser, 
// - write up some instructions for how to use it that appear at first start
// or can be accessed view a question mark. 
// Confirm file upload before upload and close upload modal after upload

import './App.css';
import { useState, useEffect } from 'react';

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

  const downloadJson = () => {
    exportToJson();
  }

  const uploadJson = () => {
    setModalOpen(true)
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
      fileName: 'users.json',
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

  const createNewCharacter = () => {
    loadCharacterFromID(`spygame-${uuidv4()}`);
  }

  const saveCharacterToLocalStorage = (id, characterObject) => {
    localStorage.setItem(id, JSON.stringify(characterObject));
  }

  const saveAndUpdateSheetValues = (value) => {
    setSheetValues({ ...value(sheetValues), characterID: currentCharacterID});
    saveCharacterToLocalStorage(currentCharacterID, value(sheetValues));
  }

  useEffect(() => {
    if (!currentCharacterID) {
      if (savedCharacters.length) {
        return loadCharacterFromID(savedCharacters[0])
      }
      return loadCharacterFromID(`spygame-${uuidv4()}`); 
    }
    loadCharacterFromID(currentCharacterID)
  }, [currentCharacterID, savedCharacters])

  const loadCharacterFromID = (id) => {
    setCurrentCharacterID(id)
    setSheetValues(JSON.parse(localStorage.getItem(id)) || {})
  }

  return (
    <div className="App">
      <Navbar 
        downloadJson={downloadJson} 
        uploadJson={uploadJson} 
        characterList={savedCharacters} 
        currentCharacter={currentCharacterID} 
        setCharacter={setCurrentCharacterID}
        createNewCharacter={createNewCharacter} 
      />
      <div className="page-body">
        <CharacterSheet sheetValues={sheetValues} setSheetValues={saveAndUpdateSheetValues} />
      </div>
      {
      modalOpen && <CustomModal closeModal={() => setModalOpen(false)}>
        <p>Upload File</p>
          <input type="file" onChange={(e) => { handleUploadChange(e) }} />
      </CustomModal>
      }
    </div>
  );
}

export default App;
