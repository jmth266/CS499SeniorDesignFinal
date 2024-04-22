import { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    momentum: { description: "Momentum Post Impact", placeholderText: "Enter momentum in mph" },
    theta: { description: "Departure Angle", placeholderText: "Enter departure angle in degrees" },
    
}

// Define a functional component for ChangeInSpeedVehicle1Page
function XMomentumPage() {

    // State for input fields and calculated change in speed
    const [fields, setFields] = useState({
        momentum: null,
        theta: null,
    });

    const [XMomentum, setXMomentum] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Momentum Post Impact Along X-Axis"}
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
                onCalculate={() => {setXMomentum(fields.momentum * Math.cos((fields.theta*Math.PI)/180))}}
            />
            {XMomentum !== null && <p>Calculated Momentum Along X-Axis: {round(XMomentum)} mph</p>}
        </div>
    );
}

export default XMomentumPage;
