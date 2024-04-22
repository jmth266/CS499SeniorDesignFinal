import { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    speed1: { description: "Approach Speed of Vehicle", placeholderText: "Enter approach speed in fps" },
    speed3: { description: "Departure Speed of Vehicle", placeholderText: "Enter departure speed in fps" },
    beta: {description: "Difference Between Approach and Departure Angles of Vehicle (Beta)", placeholderText: "Enter beta in degrees"},
}

// Define a functional component for ChangeInVelocityVehicle1Page
function ChangeInVelocityUsingBetaPage() {

    // State for input fields and calculated change in velocity
    const [fields, setFields] = useState({
        speed1: null,
        speed3: null,
        beta: null,
    });

    const [deltaV, setDeltaV] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Change In Velocity of Vehicle"}
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
                onCalculate={() => {setDeltaV(Math.sqrt((fields.speed1 **2) + (fields.speed3 **2) - (2 * fields.speed1 * fields.speed3 * Math.cos(fields.beta))))}}
            />
            {deltaV !== null && <p>Calculated Change in Velocity for Vehicle: {round(deltaV)} fps</p>}
        </div>
    );
}

export default ChangeInVelocityUsingBetaPage;
