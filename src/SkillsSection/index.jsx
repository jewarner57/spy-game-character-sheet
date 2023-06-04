import MultipleInputLine from '../MultipleInputLine';
import './index.css';

function SkillsSection({ title, updateSheetValues, sheetValues, accessor }) {

  const skillList = [
    { name: 'Acrobatics', save: "DEX" },
    { name: 'Athletics', save: "STR" },
    { name: 'Deception', save: "CHA" },
    { name: 'Espionage', save: "INT" },
    { name: 'Infiltration', save: "WIS" },
    { name: 'Infotech', save: "INT" },
    { name: 'Insight', save: "WIS" },
    { name: 'Intimidation', save: "CHA" },
    { name: 'Mechanics', save: "INT" },
    { name: 'Medicine', save: "WIS" },
    { name: 'Perception', save: "WIS" },
    { name: 'Persuasion', save: "CHA" },
    { name: 'Slight of Hand', save: "DEX" },
    { name: 'Stealth', save: "DEX" },
    { name: 'Survival', save: "WIS" },
    { name: 'Tactics', save: "INT" },
  ]

  return (
    <div className="skills-section">
      {skillList.map((skill) => {
        const inputsConfigArray = [
          { label: skill.save, gridCol: '1 / 3' },
          { label: '+', gridCol: '3 / 4', labelOnly:true },
          { label: "Prof", gridCol: '4 / 6' },
          { label: '=', gridCol: '6 / 7', labelOnly: true },
          { label: "Total", gridCol: '7 / 9' },
        ];

        return (
          <div className='skills-list' key={`${title} ${skill.name} ${accessor}`}>
            <p>{skill.name}</p>
            <MultipleInputLine
              title={title}
              updateSheetValues={updateSheetValues}
              sheetValues={sheetValues}
              accessor={`${skill.name}-${accessor}`}
              inputsConfigArray={inputsConfigArray}
            />
          </div>
        )
      })}
        
    </div>
  );
}

export default SkillsSection;
