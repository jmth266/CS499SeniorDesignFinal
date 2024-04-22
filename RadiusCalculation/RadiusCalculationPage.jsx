import { useState } from "react";
import Formula from "../../../components/Formula";
import { round } from "../../../utils/Conversions";
import NumericField from "../../../components/NumericField";



// Field descriptions
const fieldDescriptions = {
    chordLength: { description: "Chord of the circle", placeholderText: "Enter in feet" },
    moLength: { description: "Middle ordinate of the measure chord", placeholderText: "Enter in feet" },
}



// Define a functional component for radius calculation
function RadiusCalculation() {
    const [radius, setRadius] = useState(null);
    const [fields, setFields] = useState({
        chordLength: null,
        moLength: null,
    });

    // Function to calculate the radius
    const calculateRadius = () => {
        if (fields.chordLength === null || fields.moLength === null) {
            alert("Please fill out all fields.");
        } else {
            const rad = ((fields.chordLength**2)/(8*fields.moLength) + (fields.moLength/2));
            setRadius(rad);
        }
    };

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Radius with known chord and middle ordinate"}
                numericFields={
                    Object.keys(fieldDescriptions).map(fieldName => (
                        <NumericField
                            key={fieldName}
                            description={fieldDescriptions[fieldName].description}
                            onChange={(newValue) => setFields({ ...fields, [fieldName]: newValue })}
                            placeholderText={fieldDescriptions[fieldName].placeholderText}
                        />
                    ))
                }
                onCalculate={calculateRadius}
            />
            {radius !== null && <p>Calculated radius with known chord and middle ordinate: {round(radius)} feet</p>}
        </div>
    );
}

export default RadiusCalculation;
