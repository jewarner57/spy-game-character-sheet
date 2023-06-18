
import { SingleLineText } from '../FreeformText';
import './index.css';


function SheetHeader({ headerTitle, title, updateSheetValues, sheetValues, accessor }) {

  return (
    <div className="sheet-header">
      <h1 className="header-title" >{headerTitle}</h1>
      <div className='name-field'>
        <p className='name-label' >{title}: </p>
        <SingleLineText label={title} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} />
      </div>
    </div>
  );
}

export default SheetHeader;
