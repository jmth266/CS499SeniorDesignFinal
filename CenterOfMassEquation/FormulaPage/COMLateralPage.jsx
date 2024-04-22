import { useState } from "react";
import Formula from "../../../../components/Formula";
import RadioButtonField from "../../../../components/ToggleField";
import { round } from "../../../../utils/Conversions";
import NumericField from "../../../../components/NumericField.jsx";

const numericFieldMapping = {
    right: { description: "Right Side Length:", placeholderText: "Enter length in inches" },
    left: { description: "Left Side Length:", placeholderText: "Enter length in inches"},
  };

const toggleFieldMapping = {
    isLeft: "Calculating Right Side Length",
    isRight: "Calculating Left Side Length",
};


// Define a functional component for CoMLateral Page
function COMLateralPage() {
    const [result, setResult] = useState(null);

    const [fields, setFields] = useState({
        input: null,
        wheelbase_width: null,
        weight: null,
        isRight:null,
        isLeft: null,
    });
    
      const handleToggleChange = (fieldName, newValue) => {
        setFields((prevFields) => ({
          ...prevFields,
          isRight: fieldName === "isRight" && newValue,
          isLeft: fieldName === "isLeft" && newValue,
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
    
      const handleWheelBaseChange = (newValue) => {
        setFields((prevFields) => ({
          ...prevFields,
          wheelbase_width: newValue,
        }));
        return wheelbase_width
      };     
      const handleWeightChange = (newValue) => {
        setFields((prevFields) => ({
          ...prevFields,
          weight: newValue,
        }));
        return weight
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
              fields.isRight || fields.isLeft ? (
                <NumericField
                  key={fields.isRight ? "right" : "left"}
                  description={numericFieldMapping[fields.isRight ? "right" : "left"].description}
                  placeholderText={numericFieldMapping[fields.isRight ? "right" : "left"].placeholderText}
                  onChange={handleInputChange}
                  currValue={fields.input}
                />
              ) : null,
              <NumericField
                key="wheelbase_width"
                description="Wheelbase Width:"
                placeholderText="Enter Wheelbase Width"
                onChange={handleWheelBaseChange}
                currValue={fields.wheelbase_width}
              />,
              <NumericField
              key="weight"
              description="Total Weight:"
              placeholderText="Enter Weight"
              onChange={handleWeightChange}
              currValue={fields.weight}
            />
   
            ]}
            onCalculate={() => {
              const { input, weight, wheelbase_width, isRight } = fields;
              let calculatedResult;
              if (isRight) {
                calculatedResult = input * (wheelbase_width/weight);
                setResult(`Left Side Length is ${calculatedResult.toFixed(2)}in.`);

              } else {
                calculatedResult = input * (wheelbase_width/weight);
                setResult(`Right Side Length is ${calculatedResult.toFixed(2)}in.`);
              }
            }}
          />
          {result !== null && (
            <p>{result}</p>
          )}
        </div>
      );
    }

export default COMLateralPage;
