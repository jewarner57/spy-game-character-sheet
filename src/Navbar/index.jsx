import './index.css';

function Navbar({ downloadJson, uploadJson, characterList, currentCharacter, setCharacter, createNewCharacter }) {

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
            </div>
          <div className='new-character-button' onClick={() => createNewCharacter()}>
              <div>+</div>
            </div>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;
