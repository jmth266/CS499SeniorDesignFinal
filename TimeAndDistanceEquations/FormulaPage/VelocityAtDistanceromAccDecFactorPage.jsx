
import { useState } from "react";
import RadioButtonField from "../../../../components/ToggleField.jsx";
import Formula from "../../../../components/Formula.jsx";
import NumericField from "../../../../components/NumericField.jsx";



const toggleFieldMapping = {
  isAcceleration: "Calculating Acceleration",
  isDeceleration: "Calculating Deceleration",
};

function VelocityAtDistanceFromAccDecFactorPage() {
  const [fields, setFields] = useState({
    distance: null,
    friction: null,
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

  const handleDistanceChange = (newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      distance: newValue,
    }));
    return distance
  };
  const handleFrictionChange = (newValue) => {
    setFields((prevFields) => ({
      ...prevFields,
      friction: newValue,
    }));
    return friction
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
        formulaName={"Velocity at any distance during Acceleration/Deceleration when Initial Velocity, adjusted Acc/Dec Factor, and Distance are known"}
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
            key="friction"
            description={"Coefficient of Friction"}
            placeholderText={"Enter Coefficient of Friction"}
            onChange={handleFrictionChange}
            currValue={fields.friction}
          />,
          <NumericField
            key="distance"
            description={"Distance"}
            placeholderText={"Enter Distance (ft)"}
            onChange={handleDistanceChange}
            currValue={fields.distance}
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
            const { initialVelocity, distance, isAcceleration, friction } = fields;
            let calculatedResult;
            if (isAcceleration) {
              calculatedResult = sqrt([initialVelocity]**2 + 64.4 * [friction] * [distance]);
              setResult(`Velocity is + ${calculatedResult.toFixed(3)} fps`);
            } else {
                calculatedResult = sqrt([initialVelocity]**2 - 64.4 * [friction] * [distance]);
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

export default VelocityAtDistanceFromAccDecFactorPage;
