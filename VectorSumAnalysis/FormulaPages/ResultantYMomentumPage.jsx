import { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    momentum1: { description: "Vehicle 1 Momentum Along Y-Axis", placeholderText: "Enter momentum in mph" },
    momentum2: { description: "Vehicle 2 Momentum Along Y-Axis", placeholderText: "Enter momentum in mph" },
    
}

// Define a functional component for ChangeInSpeedVehicle1Page
function ResultantYMomentumPage() {

    // State for input fields and calculated change in speed
    const [fields, setFields] = useState({
        momentum1: null,
        momentum2: null,
    });

    const [ResYMomentum, setResYMomentum] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Momentum of Both Vehicles Along Y-Axis"}
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
                onCalculate={() => {setResYMomentum(fields.momentum1+fields.momentum2)}}
            />
            {ResYMomentum !== null && <p>Combined Vehicle Momentum Along Y-Axis: {round(ResYMomentum)} mph</p>}
        </div>
    );
}

export default ResultantYMomentumPage;
