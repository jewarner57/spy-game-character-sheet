import './index.css';

export function FreeformText(props) {
  const { accessor, label, updateSheetValues, sheetValues } = props
  return (
    <div className="sheet-fillable-section">
      <input label={label} className="fillable-freeform" onChange={(e) => updateSheetValues(accessor, e.target.value)} value={sheetValues?.accessor} />
    </div>
  );
}

export function FreeformTextLarge(props) {
  const { accessor, label, updateSheetValues, sheetValues } = props
  return (
    <div className="sheet-fillable-section">
      <input style={{ fontSize: '4em', textAlign: 'center' }} label={label} className="fillable-freeform" onChange={(e) => updateSheetValues(accessor, e.target.value)} value={sheetValues?.accessor}></input>
    </div>
  );
}

export function LabeledFreeformTextLarge(props) {
  const { accessor, label, updateSheetValues, sheetValues } = props
  return (
    <div className="sheet-fillable-section">
      <input style={{ fontSize: '4em', textAlign: 'center' }} label={label} className="fillable-freeform" onChange={(e) => updateSheetValues(accessor, e.target.value)} value={sheetValues?.accessor}></input>
      <p style={{ position: 'relative', top: -45, left: 10 }}>{label}</p>
    </div>
  );
}
