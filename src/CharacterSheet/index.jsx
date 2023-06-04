import { useState } from 'react';
import FreeTextSection from '../FreeTextSection';
import './index.css';

function CharacterSheet() {
  const [sheetValues, setSheetValues] = useState({});

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
  );
}

export default CharacterSheet;
