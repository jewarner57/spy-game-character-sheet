import { useState } from 'react';
import FreeTextSection from '../FreeTextSection';
import SheetHeader from '../SheetHeader';
import CustomModal from '../CustomModal';
import './index.css';

function CharacterSheet({ sheetValues, setSheetValues, deleteCharacter, downloadSheet }) {
  const [modalOpen, setModalOpen] = useState(false);
  const updateSheetValueByAccessor = (accessor, value) => {
    setSheetValues((prev) => { return { ...prev, [accessor]:value }})
    console.log(sheetValues)
  }

  const sheetConfig = [
    { title: 'Armor Class', col: "6 / 8", row: "1 / 3", variant: "freeform-large" },
    { title: 'Initative', col: "6 / 8", row: "3 / 5", variant: "freeform-large" },
    { title: 'Agent Details', col: "8 / 13", row: "1 / 3", variant: "freeform" },
    { title: 'Speed', col: "6 / 7", row: "5 / 6", variant: "freeform-large" },
    { title: 'Prof', col: "7 / 8", row: "5 / 6", variant: "freeform-large" },
    { title: 'Hit Points', col: "8 / 13", row: "3 / 6", variant: "hit-points" },
    { title: 'Ability Scores', col: "1 / 6", row: "1 / 3", variant: "ability-scores" },
    { title: 'Saving Throws', col: "1 / 6", row: "4 / 6", variant: "saving-throws" },
    { title: 'Skills', col: "1 / 5", row: "7 / 17", variant: "skills" },
    { title: 'Attacks', col: "5 / 9", row: "7 / 10", variant: "attacks" },
    { title: 'Features', col: "9 / 13", row: "7 / 18", variant: "freeform" },
    { title: 'Armor & Vehicle Proficiencies', col: "5 / 9", row: "10 / 13", variant: "freeform" },
    { title: 'Tool & Weapon Proficiencies', col: "5 / 9", row: "13 / 16", variant: "freeform" },
    { title: 'Language Proficiencies', col: "5 / 9", row: "16 / 18", variant: "freeform" },
    { title: 'Background', col: "1 / 5", row: "18 / 20", variant: "freeform" },
    { title: 'Nationality', col: "5 / 9", row: "18 / 20", variant: "freeform" },
    { title: 'Double Life', col: "1 / 5", row: "20 / 23", variant: "freeform" },
    { title: 'Equipment', col: "5 / 13", row: "20 / 26", variant: "freeform" },
    { title: 'Secret', col: "1 / 5", row: "23 / 26", variant: "freeform" },
    { title: 'Ideal', col: "1 / 5", row: "26 / 29", variant: "freeform" },
    { title: 'Bond', col: "1 / 5", row: "29 / 32", variant: "freeform" },
    { title: 'Gadgets', col: "5 / 13", row: "26 / 32", variant: "freeform" },
    { title: 'Ammo', col: "1 / 13", row: "32 / 34", variant: "freeform" },
    { title: 'Cash', col: "1 / 13", row: "34 / 36", variant: "freeform" },
  ]

  return (
    <div className="character-sheet-container">
      <div className='sheet-actions'>
        <div onClick={() => { downloadSheet() }}>
          <div>Download Sheet</div>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" fillRule="evenodd" clipRule="evenodd"><path d="M11.5 8h1v7.826l2.5-3.076.753.665-3.753 4.585-3.737-4.559.737-.677 2.5 3.064v-7.828zm7 12h-13c-2.481 0-4.5-2.019-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.79c.185-3.447 3.031-6.146 6.48-6.146 3.449 0 6.295 2.699 6.479 6.146l.043.79.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.481-2.019 4.5-4.5 4.5m.979-9.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408" /></svg>
        </div>
        <div>
          <div onClick={() => { setModalOpen(true) }}>Delete</div>
          <svg clipRule="evenodd" fillRule="evenodd" fill="currentColor" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" fillRule="nonzero" /></svg>
        </div>
      </div>
      <SheetHeader
        headerTitle={'AGENCY PERSONNEL DOSSIER'} 
        title={'Codename'}
        updateSheetValues={updateSheetValueByAccessor}
        sheetValues={sheetValues}
        accessor={'Codename'}
      />
      <div className='character-sheet-grid'>
      {sheetConfig.map((section) =>
        <FreeTextSection 
          key={section?.title}
          title={section?.title} 
          updateSheetValues={updateSheetValueByAccessor}
          sheetValues={sheetValues}
          accessor={section?.title}
          tableCol={section?.col}
          tableRow={section?.row}
          variant={section?.variant}
        />
      )}
      </div>
      {
        modalOpen && <CustomModal closeModal={() => setModalOpen(false)} buttons={ () => {
          return (
            <>
              <button onClick={() => { deleteCharacter(); setModalOpen(false) } } className='danger'>Delete</button>
              <button onClick={() => { downloadSheet(); deleteCharacter(); setModalOpen(false) } } className='primary'>Download then delete</button>
            </>
          )
        }}>
          <p>If you delete this character it will be gone forever.</p>
          
        </CustomModal>
      }
    </div>
  );
}

export default CharacterSheet;
