import { useState } from "react";
import RadioButtonField from "../../../../components/ToggleField.jsx";
import Formula from "../../../../components/Formula.jsx";
import NumericField from "../../../../components/NumericField.jsx";

const numericFieldMapping = {
  speed: { description: "Speed:", placeholderText: "Enter feet" },
  velocity: { description: "Velocity:", placeholderText: "Enter fps" },
};

const toggleFieldMapping = {
  isSpeed: "Speed (mph)",
  isVelocity: "Velocity (fps)",
};

function DistanceToAccOrDecPage() {
      const [fields, setFields] = useState({
        coefficientOfFriction: null,
        input: null,
        isSpeed: true,
        isVelocity: false,
      });
    
      const [result, setResult] = useState(null);
    
      const handleToggleChange = (fieldName, newValue) => {
        setFields((prevFields) => ({
          ...prevFields,
          isSpeed: fieldName === "isSpeed" && newValue,
          isVelocity: fieldName === "isVelocity" && newValue,
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
    
      return (
        <div className={"container mb-5 center"}>
          <Formula
            formulaName={"Calculate Distance in Feet for Vechile to Accelerate/Decelerate from Stop/to Stop"}
            toggleFields={Object.keys(toggleFieldMapping).map((fieldName) => (
              <RadioButtonField
                key={fieldName}
                description={toggleFieldMapping[fieldName]}
                value={fields[fieldName]}
                onChange={(newValue) => handleToggleChange(fieldName, newValue)}
              />
            ))}
            numericFields={[
              fields.isSpeed || fields.isVelocity ? (
                <NumericField
                  key={fields.isVelocity ? "velocity" : "speed"}
                  description={numericFieldMapping[fields.isVelocity ? "velocity" : "speed"].description}
                  placeholderText={numericFieldMapping[fields.isVelocity ? "velocity" : "speed"].placeholderText}
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
              />
            ]}
            onCalculate={() => {
              const { input, coefficientOfFriction, isSpeed } = fields;
              let calculatedResult;
              if (isSpeed) {
                calculatedResult = (input**2)/(30 * coefficientOfFriction);
              } else {
                calculatedResult = (input**2) / (64.4 * coefficientOfFriction);
              }
              setResult(`Distance is ${calculatedResult.toFixed(2)}ft`);
            }}
          />
          {result !== null && (
            <p>{result}</p>
          )}
        </div>
      );
    }
    
    
export default DistanceToAccOrDecPage;
