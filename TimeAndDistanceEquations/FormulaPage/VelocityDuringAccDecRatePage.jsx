import { useState } from "react";
import RadioButtonField from "../../../../components/ToggleField.jsx";
import Formula from "../../../../components/Formula.jsx";
import NumericField from "../../../../components/NumericField.jsx";



const toggleFieldMapping = {
  isAcceleration: "Calculating Acceleration",
  isDeceleration: "Calculating Deceleration",
};

function VelocityDuringAccDecRatePage() {
  const [fields, setFields] = useState({
    time: null,
    acceleration: null,
    initialVelocity: null,
    isAcceleration: true,
    isDeceleration: false,
  });

  const [result, setResult] = useState(null);

  const handleToggleChange = (fieldName, newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      isAcceleration: fieldName === "isAcceleration" && newValue,
      isDeceleration: fieldName === "isDeceleration" && newValue,
    }));

    // Reset the result when the radio button changes
    setResult(null);
  };

  const handleTimeChange = (newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      time: newValue,
    }));
    return time
  };
  const handleAccelerationChange = (newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      acceleration: newValue,
    }));
    return acceleration
  };

  const handleVelocityChange = (newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      initialVelocity: newValue,
    }));
    return initialVelocity
  };
  
  

  return (
    <div className={"container mb-5 center"}>
      <Formula
        formulaName={"Velocity at any time during Acceleration/Deceleration when Initial Velocity, adjusted Acc/Dec Rate, and Time are known"}
        toggleFields={Object.keys(toggleFieldMapping).map((fieldName) => (
          <RadioButtonField
            key={fieldName}
            description={toggleFieldMapping[fieldName]}
            value={fields[fieldName]}
            onChange={(newValue) => handleToggleChange(fieldName, newValue)}
          />
        ))}
        numericFields={[
          <NumericField
            key="acceleration"
            description={"Acceleration Rate"}
            placeholderText={"Enter Acceleration Rate"}
            onChange={handleAccelerationChange}
            currValue={fields.acceleration}
          />,
          <NumericField
            key="time"
            description="Time:"
            placeholderText="Enter time (s)"
            onChange={handleTimeChange}
            currValue={fields.time}
          />,
          <NumericField 
            key="initialVelocity"
            description={"Initial Velocity"}
            placeholderText={"Enter Initial Velocity"}
            onChange={handleVelocityChange}
            currValue={fields.initialVelocity}
          />
        ]}
        onCalculate={() => {
            const { initialVelocity, time, isAcceleration, acceleration } = fields;
            let calculatedResult;
            if (isAcceleration) {
              calculatedResult = (initialVelocity) +( acceleration * time);
              setResult(`Velocity is + ${calculatedResult.toFixed(3)} fps`);
            } else {
              calculatedResult = initialVelocity *  - (acceleration * time);
              setResult(`Velocity is ${calculatedResult.toFixed(3)} fps`);
            }
          }}
        />
      {result !== null && (
        <p>{result}</p>
      )}
    </div>
  );
}

export default VelocityDuringAccDecRatePage;
