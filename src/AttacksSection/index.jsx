import { useState } from 'react';
import MultipleInputLine from '../MultipleInputLine';
import './index.css';

function AttacksSection({ title, updateSheetValues, sheetValues, accessor }) {

  const [attackCount, setAttackCount] = useState(30);

  const inputsConfigArray = [
    { label: "Weapon", gridCol: '1 / 5' },
    { label: "Mod", gridCol: '5 / 6' },
    { label: "Damage", gridCol: '6 / 9' },
  ];

  return (
    <div className="attacks-section">
      {
        Array.from({ length: attackCount }, (_, index) => (
          <MultipleInputLine
            key={`${title} ${index} ${accessor}`}
            title={title}
            updateSheetValues={updateSheetValues}
            sheetValues={sheetValues}
            accessor={`${index}-${accessor}`}
            inputsConfigArray={inputsConfigArray}
          />
        ))
      }
    </div>
  );
}

export default AttacksSection;
