import { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    weight1: { description: "Weight of Vehicle 1", placeholderText: "Enter vehicle 1 weight in lbs" },
    weight2: { description: "Weight of Vehicle 2", placeholderText: "Enter vehicle 2 weight in lbs" },
    deltaSpeed1: {description: "Change in Speed of Vehicle 1", placeholderText: "Enter change in speed for vehicle 1 in mph (use other formula page)"},
}

// Define a functional component for ChangeInVelocityVehicle1Page
function ChangeInSpeedVehicle2Page() {

    // State for input fields and calculated change in velocity
    const [fields, setFields] = useState({
        weight1: null,
        weight2: null,
        deltaSpeed1: null,
    });

    const [deltaSpeed, setDeltaSpeed] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Change In Speed of Vehicle 2"}
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
                onCalculate={() => {setDeltaSpeed((fields.weight1 * fields.deltaSpeed1) / fields.weight2)}}
            />
            {deltaV !== null && <p>Calculated Change in Speed for Vehicle 2: {round(deltaSpeed)} fps</p>}
        </div>
    );
}

export default ChangeInSpeedVehicle2Page;
