import React, { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField.jsx";

const numericFieldMapping = {
  1: { description: "Second Speed:", placeholderText: "mph" },
  2: { description: "Third Speed:", placeholderText: "mph" },
  3: { description: "Fourth Speed:", placeholderText: "mph" },
  4: { description: "Fifth Speed:", placeholderText: "mph" },
};

function CombinedSpeedMultipleSurfaces() {
  const [fields, setFields] = useState({
    input: Array(1).fill(null), // Initialize input with one null value for the second speed
    fieldType: 1, // Initialize fieldType to 1
    firstSpeed: null, // Initialize firstSpeed to null
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (index, newValue) => {
    setFields((prevFields) => {
      const updatedInput = [...prevFields.input];
      updatedInput[index] = newValue;
      return { ...prevFields, input: updatedInput };
    });
  };

  return (
    <div className={"container mb-5 center"}>
      <Formula
        formulaName={"Calculates combined speed loss/gain over numerous surfaces."}
        toggleFields={
          <select
            className="form-select"
            value={fields.fieldType}
            onChange={(e) => {
              const selectedType = parseInt(e.target.value);
              const updatedInput = [...fields.input.slice(0, selectedType - 1), null];
              setFields({ ...fields, fieldType: selectedType, input: updatedInput });
            }}
          >
            <option value={1}>Second Speed</option>
            <option value={2}>Third Speed</option>
            <option value={3}>Fourth Speed</option>
            <option value={4}>Fifth Speed</option>
          </select>
        }
        numericFields={[
          <NumericField
            key="firstSpeed"
            description="First Speed:"
            placeholderText="mph"
            onChange={(newValue) => setFields({ ...fields, firstSpeed: newValue })}
            currValue={fields.firstSpeed}
          />,
          ...fields.input.map((_, index) => (
            <NumericField
              key={index}
              description={numericFieldMapping[index + 1]?.description}
              placeholderText={numericFieldMapping[index + 1]?.placeholderText}
              onChange={(newValue) => handleInputChange(index, newValue)}
              currValue={fields.input[index]}
            />
          ))
        ]}
        onCalculate={() => {
          let calculatedResult = (fields.firstSpeed ?? 0) ** 2;
          for (let i = 0; i < fields.input.length; i++) {
            calculatedResult += fields.input[i] ** 2;
          }
          calculatedResult = Math.sqrt(calculatedResult);
          setResult(`Speed is ${calculatedResult.toFixed(2)} mph`);
        }}
      />
      {result !== null && <p>{result}</p>}
    </div>
  );
}

export default CombinedSpeedMultipleSurfaces;
