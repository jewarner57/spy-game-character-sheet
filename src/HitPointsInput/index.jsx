import { LabeledFreeformTextLarge } from '../FreeformText';
import './index.css';

function HitPointsInput({ updateSheetValues, sheetValues, accessor }) {
  
  const hitPointsInputsConfig = [
    { label: 'Current Hit Points', col: "1 / 3", row: "1 / 1" },
    { label: 'Max Hit Points', col: "3 / 4", row: "1 / 1" },
    { label: 'Temporary HP', col: "1 / 2", row: "2 / 2" },
    { label: 'Current Hit Dice', col: "2 / 3", row: "2 / 2" },
    { label: 'Max Hit Dice', col: "3 / 4", row: "2 / 2" },
  ]

  return (
    <div className="hit-points-grid">
      {hitPointsInputsConfig.map((input) => {
        return (
          <div style={{ gridColumn: `${input.col}`, gridRow: `${input.row}` }} key={`${accessor}-${input.label}`}>
            <LabeledFreeformTextLarge label={input.label} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={`${accessor}-${input.label}`} />
          </div>
        )
      })}
    </div>
  );
}

export default HitPointsInput;
