import { useState } from "react";
import RadioButtonField from "../../../../components/ToggleField.jsx";
import Formula from "../../../../components/Formula.jsx";
import NumericField from "../../../../components/NumericField.jsx";

const numericFieldMapping = {
  initAndFinalVelocity: {
    initial: { description: "Initial Velocity:", placeholderText: "Enter Initial Velocity" },
    final: { description: "Final Velocity:", placeholderText: "Enter Final Velocity" },
  },
  acceleration: { description: "Acceleration:", placeholderText: "Enter Acceleration" },
};

const toggleFieldMapping = {
  isInitAndFinalVelocity: "Initial Velocity - Final Velocity",
  isAcceleration: "Change in Velocity (Delta V) is known",
};

function VelocityAndAccelerationPage() {
  const [fields, setFields] = useState({
    initialVelocity: null,
    finalVelocity: null,
    acceleration: null,
    isInitAndFinalVelocity: true,
  });

  const [result, setResult] = useState(null);

  const handleToggleChange = (fieldName, newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      isInitAndFinalVelocity: fieldName === "isInitAndFinalVelocity" && newValue,
      isAcceleration: fieldName === "isAcceleration" && newValue,
    }));
  
    // Reset the result when the radio button changes
    setResult(null);
  };
  

  const handleInputChange = (fieldName, newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: newValue,
    }));
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
            fields.isInitAndFinalVelocity ? (
              <>
                <NumericField
                  key="initialVelocity"
                  description={numericFieldMapping.initAndFinalVelocity.initial.description}
                  placeholderText={numericFieldMapping.initAndFinalVelocity.initial.placeholderText}
                  onChange={(newValue) => handleInputChange("initialVelocity", newValue)}
                  currValue={fields.initialVelocity}
                />
                <NumericField
                  key="finalVelocity"
                  description={numericFieldMapping.initAndFinalVelocity.final.description}
                  placeholderText={numericFieldMapping.initAndFinalVelocity.final.placeholderText}
                  onChange={(newValue) => handleInputChange("finalVelocity", newValue)}
                  currValue={fields.finalVelocity}
                />
              </>
            ) : (
              <>
                <NumericField
                  key="changeInVelocity"
                  description="Change in Velocity:"
                  placeholderText="Enter Change in Velocity"
                  onChange={(newValue) => handleInputChange("changeInVelocity", newValue)}
                  currValue={fields.changeInVelocity}
                />
              </>
            ),
            <NumericField
              key="acceleration"
              description={numericFieldMapping.acceleration.description}
              placeholderText={numericFieldMapping.acceleration.placeholderText}
              onChange={(newValue) => handleInputChange("acceleration", newValue)}
              currValue={fields.acceleration}
            />,
          ]}
          
          
          onCalculate={() => {
            const { initialVelocity, finalVelocity, changeInVelocity, acceleration, isInitAndFinalVelocity } = fields;
            let calculatedResult;
          
            if (isInitAndFinalVelocity) {
              calculatedResult = (initialVelocity - finalVelocity) / acceleration;
            } else {
              calculatedResult = changeInVelocity / acceleration;
            }
            
            setResult(`Result is ${calculatedResult.toFixed(3)}`);
          }}
          
      />
      {result !== null && <p>{result}</p>}
    </div>
  );
}

export default VelocityAndAccelerationPage;
