import React, { useState } from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

const fieldDescriptions = {
    hDistance: { description: "Horizontal Distance:", placeholderText: "Enter horizontal distance in feet" },
    vDistance: { description: "Vertical Distance:", placeholderText: "Enter vertical distance in feet" },
}

function AirborneVelocityLevelSurface() {

    const [fields, setFields] = useState({
        hDistance: null,
        vDistance: null,
    });

    const [grade, setGrade] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Airborne Velocity off of Level Surface"}
                numericFields={
                    Object.keys(fieldDescriptions).map(fieldName => (
                        <NumericField
                            key={fieldName}
                            description={fieldDescriptions[fieldName].description}
                            onChange={(newValue) => setFields({...fields, [fieldName]: newValue})}
                            placeholderText={fieldDescriptions[fieldName].placeholderText}
                        />
                    ))
                }
                onCalculate={() => {
                    const { hDistance, vDistance } = fields;

                    // Ensure vDistance is non-negative to avoid NaN (square root of negative number)
                    if (vDistance <= 0) {
                        setGrade(null); // Reset grade if vDistance is non-positive
                        return;
                    }

                    // Calculate the grade using the modified formula
                    const calculatedGrade = 4.01 * hDistance / Math.sqrt(vDistance);
                    setGrade(calculatedGrade);
                }}
            />
            {grade !== null && (
                <p>Speed: {round(grade)}fps</p>
            )}
        </div>
    );
}

export default AirborneVelocityLevelSurface;