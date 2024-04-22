import { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    momentum1: { description: "Resultant Momentum Along X-Axis", placeholderText: "Enter momentum in mph" },
    momentum2: { description: "Resultant Momentum Along Y-Axis", placeholderText: "Enter momentum in mph" },
    
}

// Define a functional component for ChangeInSpeedVehicle1Page
function TotalMomentumFromVectorPage() {

    // State for input fields and calculated change in speed
    const [fields, setFields] = useState({
        momentum1: null,
        momentum2: null,
    });

    const [TotalMomentum, setTotalMomentum] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Total Momentum from Resultant Vectors"}
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
                onCalculate={() => {setTotalMomentum(Math.sqrt((fields.momentum1**2)+(fields.momentum2**2)))}}
            />
            {TotalMomentum !== null && <p>Combined Vehicle Momentum: {round(TotalMomentum)} mph</p>}
        </div>
    );
}

export default TotalMomentumFromVectorPage;
