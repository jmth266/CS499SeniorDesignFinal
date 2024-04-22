import { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    speed1: { description: "Approach Speed of Vehicle 1", placeholderText: "Enter approach speed in mph" },
    speed3: { description: "Departure Speed of Vehicle 1", placeholderText: "Enter departure speed in mph" },
    
}

// Define a functional component for ChangeInSpeedVehicle1Page
function ChangeInSpeedVehicle1Page() {

    // State for input fields and calculated change in speed
    const [fields, setFields] = useState({
        speed1: null,
        speed3: null,
    });

    const [deltaSpeed, setDeltaSpeed] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Change In Speed of Vehicle 1"}
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
                onCalculate={() => {setDeltaSpeed(Math.sqrt((fields.speed1 **2) + (fields.speed3 **2)))}}
            />
            {deltaSpeed !== null && <p>Calculated Change in Speed for Vehicle 1: {round(deltaSpeed)} mph</p>}
        </div>
    );
}

export default ChangeInSpeedVehicle1Page;
