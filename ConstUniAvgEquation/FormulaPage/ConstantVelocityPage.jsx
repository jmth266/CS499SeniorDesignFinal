import { useState } from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    distance: { description: "Distance:", placeholderText: "Enter distance in feet" },
    time: { description: "Time:", placeholderText: "Enter time in seconds" },
}

// Define a functional component for ConstantVelocity
function ConstantVelocity() {

    // State for input fields and calculated velocity
    const [fields, setFields] = useState({
        distance: null,
        time: null,
    });

    const [velocity, setVelocity] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Constant Velocity (fps)"}
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
                onCalculate={() => {setVelocity(fields.distance / fields.time)}}
            />
            {velocity !== null && <p>Constant Velocity: {round(velocity)} fps</p>}
        </div>
    );
}

export default ConstantVelocity;
