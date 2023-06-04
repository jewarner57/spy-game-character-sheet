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
    { title: 'Attacks', col: "5 / 9", row: "7 / 10", variant: "attacks" },
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
