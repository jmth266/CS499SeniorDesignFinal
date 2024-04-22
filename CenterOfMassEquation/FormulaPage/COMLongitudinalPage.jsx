import { useState } from "react";
import Formula from "../../../../components/Formula";
import RadioButtonField from "../../../../components/ToggleField";
import { round } from "../../../../utils/Conversions";
import NumericField from "../../../../components/NumericField.jsx";

const numericFieldMapping = {
    front: { description: "Front Axel Length:", placeholderText: "Enter length in inches" },
    rear: { description: "Rear Axel Length:", placeholderText: "Enter length in inches"},
  };

const toggleFieldMapping = {
    isRear: "Calculating Front Axel Length",
    isFront: "Calculating Rear Axel Length",
};


// Define a functional component for COMLongitudinalPage
function COMLongitudinalPage() {
    const [result, setResult] = useState(null);

    const [fields, setFields] = useState({
        input: null,
        wheelbase_width: null,
        weight: null,
        isFront:null,
        isRear: null,
    });
    
      const handleToggleChange = (fieldName, newValue) => {
        setFields((prevFields) => ({
          ...prevFields,
          isFront: fieldName === "isFront" && newValue,
          isRear: fieldName === "isRear" && newValue,
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
              fields.isFront || fields.isRear ? (
                <NumericField
                  key={fields.isFront ? "front" : "rear"}
                  description={numericFieldMapping[fields.isFront ? "front" : "rear"].description}
                  placeholderText={numericFieldMapping[fields.isFront ? "front" : "rear"].placeholderText}
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
              const { input, weight, wheelbase_width, isFront } = fields;
              let calculatedResult;
              if (isFront) {
                calculatedResult = input * (wheelbase_width/weight);
                setResult(`Rear Side Length is ${calculatedResult.toFixed(2)}in.`);

              } else {
                calculatedResult = input * (wheelbase_width/weight);
                setResult(`Front Side Length is ${calculatedResult.toFixed(2)}in.`);

              }
            }}
          />
          {result !== null && (
            <p>{result}</p>
          )}
        </div>
      );
    }

export default COMLongitudinalPage;
