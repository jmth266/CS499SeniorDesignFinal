import { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    momentum_resx: { description: "Resultant Momentum Along X-Axis", placeholderText: "Enter momentum in mph" },
    momentum_impactx: { description: "Impact Momentum Along X-Axis", placeholderText: "Enter momentum in mph" },
    weight: { description: "Weight in Pounds of Vehicle 1", placeholderText: "Enter weight in lbs"}
}

// Define a functional component for ChangeInSpeedVehicle1Page
function SpeedVehicle1Page() {

    // State for input fields and calculated change in speed
    const [fields, setFields] = useState({
        momentum_resx: null,
        momentum_impactx: null,
        weight: null
    });

    const [speed1, setSpeed1] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Speed of Vehicle 1"}
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
                onCalculate={() => {setSpeed1((fields.momentum_resx - fields.momentum_impactx)/fields.weight)}}
            />
            {speed1 !== null && <p>Speed of Vehicle 1: {round(speed1)} mph</p>}
        </div>
    );
}

export default SpeedVehicle1Page;
