import AbilityBar, { AbilityBarModifiers } from '../AbilityBar';
import './index.css';

function AbilityScoresSection({ updateSheetValues, sheetValues, accessor }) {

  const abilities = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]

  return (
    <div className="ability-scores-section">
      <AbilityBar abilities={abilities} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} />
      <AbilityBarModifiers abilities={abilities} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} />
    </div>
  );
}

export default AbilityScoresSection;
