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
  const { accessor, label, header, updateSheetValues, sheetValues } = props
  return (
    <div className="sheet-fillable-section sheet-fillable-section-large">
      {header && <h3 className="freeform-text-header" >{header}</h3>}
      <input 
        style={{ fontSize: '3em', textAlign: 'center', borderTop: `${header ? 'none' : '1px solid #333'}`, borderBottom: `${label ? 'none' : '1px solid #333'}` }} 
        label={label} className="fillable-freeform" 
        onChange={(e) => updateSheetValues(accessor, e.target.value)} 
        value={sheetValues?.accessor}
      />
      <p style={{ margin: 0, border: '1px solid #333', borderTop: 'none', textAlign: 'center' }}>{label}</p>
    </div>
  );
}
