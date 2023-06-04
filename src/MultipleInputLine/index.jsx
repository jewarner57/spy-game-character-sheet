import { SingleLineText } from '../FreeformText';
import './index.css';

function MultipleInputLine({ title, updateSheetValues, sheetValues, accessor, inputsConfigArray }) {

  return (
    <div className="multi-input-line">
      {inputsConfigArray.map((input) => {
        return (
          <div style={{ gridColumn: input.gridCol }} key={`${input.label} ${accessor}`} >
            <p style={{ marginTop: '8px', marginBottom: '5px' }} >{input.label}</p>
            {!input.labelOnly && <SingleLineText label={`${title}-${input.label}`} accessor={`${input.label} ${accessor}`} sheetValues={sheetValues} updateSheetValues={updateSheetValues} />}
          </div>
        )
      })}
    </div>
  );
}

export default MultipleInputLine;
