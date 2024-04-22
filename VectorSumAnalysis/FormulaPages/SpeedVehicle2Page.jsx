import { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    momentum_resy: { description: "Resultant Momentum Along Y-Axis", placeholderText: "Enter momentum in mph" },
    weight: { description: "Weight in Pounds of Vehicle 2", placeholderText: "Enter weight in lbs"},
    psi: { description: "Approach Angle of Vehicle 2", placeholderText: "Enter angle in degrees"}
}

function SpeedVehicle2Page() {

    // State for input fields and calculated change in speed
    const [fields, setFields] = useState({
        momentum_resy: null,
        weight: null,
        psi: null
    });

    const [speed2, setSpeed2] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Speed of Vehicle 2"}
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
                onCalculate={() => {setSpeed2(fields.momentum_resy / (fields.weight*Math.sin(fields.psi*(Math.PI/180))))}}
            />
            {speed2 !== null && <p>Speed of Vehicle 2: {round(speed2)} mph</p>}
        </div>
    );
}

export default SpeedVehicle2Page;
