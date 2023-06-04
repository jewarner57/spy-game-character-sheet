import './App.css';
import { useState } from 'react';

import CharacterSheet from './CharacterSheet';
import Navbar from './Navbar';

function App() {
  const [sheetValues, setSheetValues] = useState({});

  const downloadJson = () => {
    exportToJson();
  }

  const uploadJson = () => {
    console.log('upload')
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

  return (
    <div className="App">
      <Navbar downloadJson={downloadJson} uploadJson={uploadJson}/>
      <div className="page-body">
        <CharacterSheet sheetValues={sheetValues} setSheetValues={setSheetValues} />
      </div>
    </div>
  );
}

export default App;
