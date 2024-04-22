import { useState } from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    distance: { description: "Distance:", placeholderText: "Enter distance in feet" },
    velocity: { description: "Velocity:", placeholderText: "Enter velocity in fps" },
}

// Define a functional component for ConstantTimePage
function ConstantTimePage() {

    // State for input fields and calculated time
    const [fields, setFields] = useState({
        distance: null,
        velocity: null,
    });

    const [time, setTime] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Constant Time (s)"}
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
                onCalculate={() => {setTime(fields.distance / fields.velocity)}}
            />
            {time !== null && <p>Constant Time: {round(time)}s</p>}
        </div>
    );
}

export default ConstantTimePage;
