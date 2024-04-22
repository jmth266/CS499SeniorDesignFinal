import { useState } from "react";
import RadioButtonField from "../../../../components/ToggleField.jsx";
import Formula from "../../../../components/Formula.jsx";
import NumericField from "../../../../components/NumericField.jsx";

const numericFieldMapping = {
    Gain: { description: "Distance Which Vehicle Gains Speed:", placeholderText: "Enter Distance (feet)" },
    Loss: { description: "Distance Which Vehicle Loses Speed:", placeholderText: "Enter Distance (feet)" },
  };
  
  const toggleFieldMapping = {
    isGain: "Speed is Gained",
    isLoss: "Speed is Lost",
  };
  
  function StartingCombinedSpeedPage() {
    const [fields, setFields] = useState({
      coefficientOfFriction: null,
      distance: null,
      speed: null,
      input: null,
      isGain: true,
      isLoss: false,
    });
  
    const [result, setResult] = useState(null);
  
    const handleToggleChange = (fieldName, newValue) => {
      setFields((prevFields) => ({
        ...prevFields,
        isGain: fieldName === "isGain" && newValue,
        isLoss: fieldName === "isLoss" && newValue,
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
  
    const handleCoefficientChange = (newValue) => {
      setFields((prevFields) => ({
        ...prevFields,
        coefficientOfFriction: newValue,
      }));
      return coefficientOfFriction
    };

    const handleSpeed = (newValue) => {
        setFields((prevFields) => ({
          ...prevFields,
          speed: newValue,
        }));
        return speed
      };
  
    return (
      <div className={"container mb-5 center"}>
        <Formula
          formulaName={"Combined Speed/Velocity"}
          toggleFields={Object.keys(toggleFieldMapping).map((fieldName) => (
            <RadioButtonField
              key={fieldName}
              description={toggleFieldMapping[fieldName]}
              value={fields[fieldName]}
              onChange={(newValue) => handleToggleChange(fieldName, newValue)}
            />
          ))}
          numericFields={[
            fields.isGain || fields.isLoss ? (
              <NumericField
                key={fields.isLoss ? "Loss" : "Gain"}
                description={numericFieldMapping[fields.isLoss ? "Loss" : "Gain"].description}
                placeholderText={numericFieldMapping[fields.isLoss ? "Loss" : "Gain"].placeholderText}
                onChange={handleInputChange}
                currValue={fields.input}
              />
            ) : null,
            <NumericField
              key="coefficientOfFriction"
              description="Coefficient of Friction:"
              placeholderText="Enter Coefficient of Friction"
              onChange={handleCoefficientChange}
              currValue={fields.coefficientOfFriction}
            />,
            <NumericField
              key="speed"
              description="Original Speed of Vehicle"
              placeholderText="Enter Speed (mph)"
              onChange={handleSpeed}
              currValue={fields.speed}
            />
          ]}
          onCalculate={() => {
            const { input, speed, coefficientOfFriction, isGain } = fields;
            let calculatedResult;
            if (isGain) {
              calculatedResult = Math.sqrt(input ** 2 + 30 * speed * coefficientOfFriction);
            } else {
              calculatedResult = Math.sqrt(input ** 2 - 30 * speed * coefficientOfFriction);
            }
            setResult(`Speed is ${calculatedResult.toFixed(3)}s`);
          }}
        />
        {result !== null && (
          <p>{result}</p>
        )}
      </div>
    );
  }
  
export default StartingCombinedSpeedPage;
