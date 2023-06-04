import AbilityBar, { SavingThrowProfBar } from '../AbilityBar';
import './index.css';

function SavingThrowsSection({ updateSheetValues, sheetValues, accessor }) {

  const abilities = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]

  return (
    <div className="ability-scores-section">
      <AbilityBar abilities={abilities} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} />
      <SavingThrowProfBar abilities={abilities} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} />
    </div>
  );
}

export default SavingThrowsSection;
