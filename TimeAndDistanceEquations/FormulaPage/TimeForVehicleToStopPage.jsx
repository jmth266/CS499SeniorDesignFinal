import { useState } from "react";
import RadioButtonField from "../../../../components/ToggleField.jsx";
import Formula from "../../../../components/Formula.jsx";
import NumericField from "../../../../components/NumericField.jsx";

const numericFieldMapping = {
  acceleration: { description: "Acceleration:", placeholderText: "Enter Acceleration (fps^2)" },
  friction: { description: "Coefficient of Friction:", placeholderText: "Enter Coefficient of Friction" },
};

const toggleFieldMapping = {
  isAcceleration: "Acceleration is known",
  isFriction: "Coefficient of Friction is known",
};

function TimeForVehicleToStopPage() {
  const [fields, setFields] = useState({
    time: null,
    input: null,
    isAcceleration: true,
    isFriction: false,
  });

  const [result, setResult] = useState(null);

  const handleToggleChange = (fieldName, newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      isAcceleration: fieldName === "isAcceleration" && newValue,
      isFriction: fieldName === "isFriction" && newValue,
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

  const handleTimeChange = (newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      time: newValue,
    }));
    return time
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
          fields.isAcceleration || fields.isFriction ? (
            <NumericField
              key={fields.isFriction ? "friction" : "acceleration"}
              description={numericFieldMapping[fields.isFriction ? "friction" : "acceleration"].description}
              placeholderText={numericFieldMapping[fields.isFriction ? "friction" : "acceleration"].placeholderText}
              onChange={handleInputChange}
              currValue={fields.input}
            />
          ) : null,
          <NumericField
            key="time"
            description="Time:"
            placeholderText="Enter time (s)"
            onChange={handleTimeChange}
            currValue={fields.time}
          />
        ]}
        onCalculate={() => {
          const {input, time, isAcceleration, acceleration, friction } = fields;
          let calculatedResult;
          if (isAcceleration) {
            calculatedResult = 0.5* input * (time**2);
          } else {
            calculatedResult = 16.1 * input * (time**2);
          }
          setResult(`Distance is ${calculatedResult.toFixed(3)}ft`);
        }}
      />
      {result !== null && (
        <p>{result}</p>
      )}
    </div>
  );
}

export default TimeForVehicleToStopPage;
