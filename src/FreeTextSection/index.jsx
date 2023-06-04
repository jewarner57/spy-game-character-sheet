import AbilityScoresSection from '../AbilityScoresSection';
import SavingThrowsSection from '../SavingThrowsSection';
import { FreeformText, FreeformTextLarge } from '../FreeformText';
import HitPointsInput from '../HitPointsInput';
import SectionHeader from '../SectionHeader'
import './index.css';
import AttacksSection from '../AttacksSection';

function FreeTextSection({ title, tableCol, tableRow, updateSheetValues, sheetValues, accessor, variant }) {
  
  
  const variantComponentMap = {
    "freeform": FreeformText,
    "freeform-large": FreeformTextLarge,
    "ability-scores": AbilityScoresSection,
    "saving-throws": SavingThrowsSection,
    "skills": <></>,
    "attacks": AttacksSection,
    "hit-points": HitPointsInput, 
  }

  const TextInputComponent = variantComponentMap[variant];
  
  return (
    <div className="free-text-section" style={{ gridColumn: `${tableCol}`, gridRow: `${tableRow}` }}>
      <SectionHeader title={title} /> 
      <div className='free-text-input'>
        <TextInputComponent label={title} updateSheetValues={updateSheetValues} sheetValues={sheetValues} accessor={accessor} /> 
      </div>
    </div>
  );
}

export default FreeTextSection;
