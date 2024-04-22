import { useState } from "react";
import RadioButtonField from "../../../../components/ToggleField.jsx";
import Formula from "../../../../components/Formula.jsx";
import { forceOfGravity } from "../../../../utils/Constants";
import NumericField from "../../../../components/NumericField.jsx";

const numericFieldMapping = {
  distance: { description: "Distance:", placeholderText: "Enter feet" },
  velocity: { description: "Velocity:", placeholderText: "Enter fps" },
};

const toggleFieldMapping = {
  isDistance: "Distance is known",
  isVelocity: "Velocity (fps) is known",
};

function GravityAndVelocityPage() {
  const [fields, setFields] = useState({
    coefficientOfFriction: null,
    input: null,
    isDistance: true,
    isVelocity: false,
  });

  const [result, setResult] = useState(null);

  const handleToggleChange = (fieldName, newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      isDistance: fieldName === "isDistance" && newValue,
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
        formulaName={"Accelerate from Stop or Decelerate to Stop"}
        toggleFields={Object.keys(toggleFieldMapping).map((fieldName) => (
          <RadioButtonField
            key={fieldName}
            description={toggleFieldMapping[fieldName]}
            value={fields[fieldName]}
            onChange={(newValue) => handleToggleChange(fieldName, newValue)}
          />
        ))}
        numericFields={[
          fields.isDistance || fields.isVelocity ? (
            <NumericField
              key={fields.isVelocity ? "velocity" : "distance"}
              description={numericFieldMapping[fields.isVelocity ? "velocity" : "distance"].description}
              placeholderText={numericFieldMapping[fields.isVelocity ? "velocity" : "distance"].placeholderText}
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
          const { input, coefficientOfFriction, isDistance } = fields;
          let calculatedResult;
          if (isDistance) {
            calculatedResult = 0.249 * Math.sqrt(input / coefficientOfFriction);
          } else {
            calculatedResult = input / (coefficientOfFriction * forceOfGravity);
          }
          setResult(`Time is ${calculatedResult.toFixed(3)}s`);
        }}
      />
      {result !== null && (
        <p>{result}</p>
      )}
    </div>
  );
}

export default GravityAndVelocityPage;
