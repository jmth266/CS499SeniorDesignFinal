import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/Conversions";

const fieldDescriptions = {
    time: { description: "Time Vehicle Travels Measured Speed Change:", placeholderText: "Enter time in seconds" },
    hVelocity: { description: "Higher Initial/Final Velocity:", placeholderText: "Enter Speed in fps" },
    sVelocity: { description: "Lower Initial/Final Velocity:", placeholderText: "Enter Speed in fps" },
}

function AccDecFactorSpeedToSpeed() {

    const [fields, setFields] = useState({
        time: null,
        hVelocity: null,
        sVelocity: null,
    });

    const [grade, setCOF] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Dec/Acc Factor for Vehicle When Vehicle Slows or Accelerates From One Speed to Another and Time is Known"}
                numericFields={
                    Object.keys(fieldDescriptions).map(fieldName => (
                        <NumericField
                            key={fieldName}
                            description={fieldDescriptions[fieldName].description}
                            onChange={(newValue) => setFields({...fields, [fieldName]: newValue})}
                            placeholderText={fieldDescriptions[fieldName].placeholderText}
                        />
                    ))
                }
                onCalculate={() => {setCOF((fields.hVelocity - fields.sVelocity) / 32.2 * fields.time)}}
            />
            {grade !== null && (
                <p>Coefficient of Friction: {round(grade)}</p>
            )}
        </div>
    );
}

export default AccDecFactorSpeedToSpeed;