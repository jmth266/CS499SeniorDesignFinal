import React, { useState } from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

const fieldDescriptions = {
    distance: { description: "Horizontal Distance Vehicle Travels in Air:", placeholderText: "Enter horizontal distance in feet" },
    angle: { description: "Takeoff Angle of Vehicle:", placeholderText: "Enter angle in degrees" },
    vDistance: { description: "Vertical Distance Vehicle Travels in Air:", placeholderText: "Enter distance in feet (negative if vehicle lands higher" },
}

function VelocityOfAirborneObjectWithAngle() {

    const [fields, setFields] = useState({
        distance: null,
        angle: null,
        vDistance: null,
    });

    const [grade, setGrade] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Velocity of Airborne Object with Takeoff Angle"}
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
                    const { distance, angle, vDistance } = fields;

      
                    // Calculate the grade using the modified formula
                    const calculatedGrade = 4.01 * distance / Math.cos(angle/180) * Math.sqrt((vDistance) + distance * Math.tan(angle/180));
                    setGrade(calculatedGrade);
                }}
            />
            {grade !== null && (
                <p>Speed: {round(grade)}fps</p>
            )}
        </div>
    );
}

export default VelocityOfAirborneObjectWithAngle;
