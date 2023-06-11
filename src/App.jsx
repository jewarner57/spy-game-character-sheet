import './App.css';
import { useState } from 'react';

import CharacterSheet from './CharacterSheet';
import Navbar from './Navbar';
import CustomModal from './CustomModal';

function App() {
  const [sheetValues, setSheetValues] = useState({});
  const [modalOpen, setModalOpen] = useState(false)
  const [files, setFileContent] = useState();

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
        setSheetValues(loadedSheetObj);
      };
  };

  return (
    <div className="App">
      <Navbar downloadJson={downloadJson} uploadJson={uploadJson}/>
      <div className="page-body">
        <CharacterSheet sheetValues={sheetValues} setSheetValues={setSheetValues} />
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
