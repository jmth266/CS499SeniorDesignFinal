import { useState } from "react";
import Formula from "../../../../components/Formula.jsx";
import NumericField from "../../../../components/NumericField.jsx";

// Field descriptions
const fieldDescriptions = {
    initialSpeed: { description: "Initial Speed", placeholderText: "Enter speed in MPH" },
    finalSpeed: { description: "Final Speed", placeholderText: "Enter speed MPH" },
    coeffOfFriction: { description: "Coefficient of Friction", placeholderText: "Enter Coefficient of Friction" }
};

function AccFromOneSpeedToAnotherPage() {
    const [time, setTime] = useState(null);
    const [fields, setFields] = useState({
        initialSpeed: null,
        finalSpeed: null,
        coeffOfFriction: null,
    });

    // Function to calculate the time
    const calculateTime = () => {
        if (fields.initialSpeed === null || fields.finalSpeed === null || fields.coeffOfFriction === null) {
            alert("Please fill out all fields.");
        } else {
            const t = (0.0455 * (fields.initialSpeed - fields.finalSpeed) / fields.coeffOfFriction);
            setTime(t);
        }
    };

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Acceleration or Deceleration from One Speed to Another"}
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
                onCalculate={calculateTime}
            />
            {time !== null && <p>Time: {time.toFixed(3)}s</p>}
        </div>
    );
}

export default AccFromOneSpeedToAnotherPage;
