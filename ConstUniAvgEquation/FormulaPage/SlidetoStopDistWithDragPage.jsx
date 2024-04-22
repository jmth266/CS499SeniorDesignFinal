import { useState } from "react";
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import { round } from "../../../../utils/Conversions";

// Field descriptions for the numeric input fields
const fieldDescriptions = {
    speed: { description: "Speed of Vehicle", placeholderText: "Enter speed in mph" },
    coefficient: { description: "Coefficient of Friction", placeholderText: "Enter the coefficient of friction" },
}

// Define a functional component for SlidetoStopWithDragPage
function SlidetoStopWithDragPage() {

    // State for input fields and calculated distance
    const [fields, setFields] = useState({
        speed: null,
        coefficient: null,
    });

    const [distance, setDistance] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Slide to Stop Distance with known Distance and Drag Factor"}
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
                onCalculate={() => {setDistance((fields.speed **2) / (30 * fields.coefficient))}}
            />
            {distance !== null && <p>Calculated Slide to Stop Distance: {round(distance)} feet</p>}
        </div>
    );
}

export default SlidetoStopWithDragPage;
