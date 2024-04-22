import { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    speed1: { description: "Approach Speed of Vehicle 1", placeholderText: "Enter approach speed in fps" },
    speed3: { description: "Departure Speed of Vehicle 1", placeholderText: "Enter departure speed in fps" },
    theta: {description: "Departure Angle of Vehicle 1", placeholderText: "Enter departure angle in degrees"},
}

// Define a functional component for ChangeInVelocityVehicle1Page
function ChangeInVelocityVehicle1Page() {

    // State for input fields and calculated change in velocity
    const [fields, setFields] = useState({
        speed1: null,
        speed3: null,
        theta: null,
    });

    const [deltaV, setDeltaV] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Change In Velocity of Vehicle 1"}
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
                onCalculate={() => {setDeltaV(Math.sqrt((fields.speed1 **2) + (fields.speed3 **2) - (2 * fields.speed1 * fields.speed3 * Math.cos(fields.theta))))}}
            />
            {deltaV !== null && <p>Calculated Change in Velocity for Vehicle 1: {round(deltaV)} fps</p>}
        </div>
    );
}

export default ChangeInVelocityVehicle1Page;
