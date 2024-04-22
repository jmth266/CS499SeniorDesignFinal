import React, { useState } from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";
import { forceOfGravity } from '../../../../utils/Constants';

const fieldDescriptions = {
    velocity: { description: "Velocity of Vehicle at Takeoff:", placeholderText: "Enter velocity in fps" },
    angle: { description: "Takeoff Angle of Vehicle:", placeholderText: "Enter angle in degrees" },
}

function HighestPointOnFlightPath() {

    const [fields, setFields] = useState({
        distance: null,
        angle: null,
    });

    const [grade, setGrade] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Highest Point on a flight path"}
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
                    const { velocity, angle } = fields;

      
                    // Calculate the grade using the modified formula
                    const calculatedGrade = ((velocity * Math.sin(angle/180)) ** 2) / 2 * forceOfGravity;
                    setGrade(calculatedGrade);
                }}
            />
            {grade !== null && (
                <p>Highest Point: {round(grade)}ft</p>
            )}
        </div>
    );
}

export default HighestPointOnFlightPath;