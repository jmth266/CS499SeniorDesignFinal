import { useState } from "react";
import RadioButtonField from "../../../../components/ToggleField.jsx";
import Formula from "../../../../components/Formula.jsx";
import NumericField from "../../../../components/NumericField.jsx";

const numericFieldMapping = {
    Higher: { description: "Vertical distance vehicle travels if vehicle lands higher than takeoff height:", placeholderText: "Enter Distance (feet)" },
    Lower: { description: "Vertical distance vehicle travels if vehicle lands lower than takeoff height:", placeholderText: "Enter Distance (feet)" },
  };
  
  const toggleFieldMapping = {
    isHigher: "Vertical distance vehicle travels if vehicle lands higher than takeoff height",
    isLower: "Vertical distance vehicle travels if vehicle lands lower than takeoff height",
  };
  
  function SpeedOfAirborneObjectWithGradeDownhill() {
    const [fields, setFields] = useState({
      distance: null,
      grade:null,
      input: null,
      isLower: false,
      isHigher: true,
    });
  
    const [result, setResult] = useState(null);
  
    const handleToggleChange = (fieldName, newValue) => {
      setFields((prevFields) => ({
        ...prevFields,
        isLower: fieldName === "isLower" && newValue,
        isHigher: fieldName === "isHigher" && newValue,
      }));
  
      // Reset the result when the radio button changes
      setResult(null);
    };
  
    const handleInputChange = (newValue) => {
      setFields((prevFields) => ({
        ...prevFields,
        input: newValue,
      }));
      return input
    };
  
    const handleDistance = (newValue) => {
      setFields((prevFields) => ({
        ...prevFields,
        distance: newValue,
      }));
      return distance
    };

    const handlegrade = (newValue) => {
        setFields((prevFields) => ({
          ...prevFields,
          grade: newValue,
        }));
        return grade
      };
  
    return (
      <div className={"container mb-5 center"}>
        <Formula
          formulaName={"Speed of Object That Goes Airborne (Takeoff Grade Downhill)"}
          toggleFields={Object.keys(toggleFieldMapping).map((fieldName) => (
            <RadioButtonField
              key={fieldName}
              description={toggleFieldMapping[fieldName]}
              value={fields[fieldName]}
              onChange={(newValue) => handleToggleChange(fieldName, newValue)}
            />
          ))}
          numericFields={[
            fields.isLower || fields.isHigher ? (
              <NumericField
                key={fields.isHigher ? "Higher" : "Lower"}
                description={numericFieldMapping[fields.isHigher ? "Higher" : "Lower"].description}
                placeholderText={numericFieldMapping[fields.isHigher ? "Higher" : "Lower"].placeholderText}
                onChange={handleInputChange}
                currValue={fields.input}
              />
            ) : null,
            <NumericField
              key="distance"
              description="Horizontal Distance The Object Travels in Air:"
              placeholderText="Enter distance (feet)"
              onChange={handleDistance}
              currValue={fields.distance}
            />,
            <NumericField
              key="grade"
              description="Takeoff Grade of the Vehicle (Downhill)"
              placeholderText="Enter Grade (percent)"
              onChange={handlegrade}
              currValue={fields.grade}
            />
          ]}
          onCalculate={() => {
            const { input, grade, distance, isLower } = fields;
            let calculatedResult;
            if (isLower) {
                calculatedResult = ((2.73 * distance * Math.sqrt(1 + grade ** 2)) / Math.sqrt((input)+ (((-1)*(distance)) * grade)));
            } else {
              // calculatedResult = ((2.73 * distance * Math.sqrt(1 + grade ** 2)) / Math.sqrt(4));
              calculatedResult = ((2.73 * distance * Math.sqrt(1 + grade ** 2)) / Math.sqrt(((-1)*(input))+ (((-1)*(distance)) * grade)));
            }
            setResult(`Speed is ${calculatedResult.toFixed(3)}mph`);
          }}
        />
        {result !== null && (
          <p>{result}</p>
        )}
      </div>
    );
  }
  
export default SpeedOfAirborneObjectWithGradeDownhill;