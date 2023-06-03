import { LabeledFreeformTextLarge } from '../FreeformText';
import './index.css';

function HitPointsInput({ title, updateSheetValues, sheetValues, accessor }) {
  
  return (
    <div className="hit-points-grid">
      <div style={{ gridColumn: "1 / 3", gridRow: '1 / 1' }}>
        <LabeledFreeformTextLarge label={'Current Hit Points'} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} />
      </div>
      <div style={{ gridColumn: "3 / 4", gridRow: '1 / 1' }}>
        <LabeledFreeformTextLarge label={'Max Hit Points'} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} />
      </div>
      <div style={{ gridColumn: "1 / 2", gridRow: '2 / 2' }}>
        <LabeledFreeformTextLarge label={"Temporary HP"} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} />
      </div>
      <div style={{ gridColumn: "2 / 3", gridRow: '2 / 2' }}>
        <LabeledFreeformTextLarge label={"Current Hit Dice"} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} />
      </div>
      <div style={{ gridColumn: "3 / 4", gridRow: '2 / 2' }}>
        <LabeledFreeformTextLarge label={"Max Hit Dice"} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} />
      </div>
    </div>
  );
}

export default HitPointsInput;
