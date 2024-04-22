import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/Conversions";

const fieldDescriptions = {
    time: { description: "Time which Dec/Acc From or To Stop:", placeholderText: "Enter time in seconds" },
    velocity: { description: "Velocity of Vehicle:", placeholderText: "Enter velocity in fps" },
}

function AccDecFactorSlowingAcceling() {

    const [fields, setFields] = useState({
        time: null,
        velocity: null,
    });

    const [grade, setCOF] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Coefficient of Friction"}
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
                onCalculate={() => {setCOF((fields.time / 32.2) * fields.velocity)}}
            />
            {grade !== null && (
                <p>Coefficient of Friction: {round(grade)}</p>
            )}
        </div>
    );
}

export default AccDecFactorSlowingAcceling;