import { LabeledFreeformTextLarge } from '../FreeformText';
import './index.css';

function AbilityBar({ abilities, updateSheetValues, sheetValues, accessor }) { 

  return (
    <div className="ability-bar">
      {abilities.map((ability, index) => {
        return  (
          <LabeledFreeformTextLarge 
            key={`${accessor}-${ability}`}
            style={{ gridColumn: `${index} / ${index+1}`, gridRow: 1 / 2 }} 
            accessor={`${ability} ${accessor}`}
            label={'Score'} 
            header={ability} 
            updateSheetValues={updateSheetValues} 
            sheetValues={sheetValues} 
          />
        )
      })}
    </div>
  );
}

export function AbilityBarModifiers({ abilities, updateSheetValues, sheetValues, accessor }) {

  return (
    <div className="ability-bar bottom-ability-bar">
      {abilities.map((ability, index) => {
        return (
          <LabeledFreeformTextLarge
            key={`${accessor}-modifier-${ability}`}
            style={{ gridColumn: `${index} / ${index + 1}`, gridRow: 1 / 2 }}
            accessor={`${ability} modifier ${accessor}`}
            label={'Modifier'}
            updateSheetValues={updateSheetValues}
            sheetValues={sheetValues}
          />
        )
      })}
    </div>
  );
}

export function SavingThrowProfBar({ abilities, updateSheetValues, sheetValues, accessor }) {

  return (
    <div className="ability-bar bottom-ability-bar">
      {abilities.map((ability, index) => {
        const itemAccessor = `${ability}-prof-${accessor}`
        return (
          <div className="prof-bar-item" key={itemAccessor}>
            <p>Prof</p>
            <input type='checkbox' onChange={(e) => updateSheetValues(itemAccessor, e.target.checked)} value={sheetValues[itemAccessor]}/>
          </div>
        )
      })}
    </div>
  );
}

export default AbilityBar;
