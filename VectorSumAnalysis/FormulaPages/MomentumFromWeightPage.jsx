import { useState } from "react";
import RadioButtonField from "../../../../components/ToggleField";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField.jsx";

  const numericFieldMapping = {
    speed: { description: "Speed:", placeholderText: "mph" },
    velocity: { description: "Velocity:", placeholderText: "fps" },
    weight: {description: "Weight of Vehicle:", placeholderText: "lbs"}
  };
  
  const toggleFieldMapping = {
    isSpeed: "Speed (mph)",
    isVelocity: "Velocity (fps)",
  };
  
  function MomentumFromWeightPage() {

    const [fields, setFields] = useState({
      input: null,
      isSpeed: false,
      isVelocity: false,
      weight: null,
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
  
  
    const toggleFields = Object.keys(toggleFieldMapping).map((fieldName) => (
      <RadioButtonField
        key={fieldName}
        description={toggleFieldMapping[fieldName]}
        value={fields[fieldName]}
        onChange={(newValue) => handleToggleChange(fieldName, newValue)}
      />
    ));
    
  
    return (
        <div className={"container mb-5 center"}>
          <Formula
            formulaName={"Vehicle Momentum From Weight"}
            toggleFields={toggleFields}
            numericFields={[
              fields.isSpeed && (
                <NumericField
                  key="speed"
                  description={numericFieldMapping.speed.description}
                  placeholderText={numericFieldMapping.speed.placeholderText}
                  onChange={(newValue) => setFields({ ...fields, speed: newValue })}
                />
              ),
              fields.isVelocity && (
                <NumericField
                  key="velocity"
                  description={numericFieldMapping.velocity.description}
                  placeholderText={numericFieldMapping.velocity.placeholderText}
                  onChange={(newValue) => setFields({ ...fields, velocity: newValue })}
                />
              ),
              <NumericField
                key="weight"
                description={numericFieldMapping.weight.description}
                placeholderText={numericFieldMapping.weight.placeholderText}
                onChange={(newValue) => setFields({ ...fields, weight: newValue })}
              />
            ]}
            onCalculate={() => {
                let momentum;
                if (fields.isSpeed) {
                  momentum = fields.speed * fields.weight;
                } else if (fields.isVelocity) {
                  momentum = fields.velocity * fields.weight;
                }
                setResult(momentum);
              }}
          />
          {result !== null && (
            <p>
              Momentum: {Number(result.toFixed(2))} {fields.isSpeed ? "fps" : "mph"}
            </p>
          )}
        </div>
      );
      
  }
  
  export default MomentumFromWeightPage;