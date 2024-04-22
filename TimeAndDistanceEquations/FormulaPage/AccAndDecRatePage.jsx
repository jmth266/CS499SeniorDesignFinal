import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";

const fieldDescriptions = {
    velocity: { description: "Velocity:", placeholderText: "Enter Velocity in fps" },
    acceleration: { description: "Acceleration/Deceleration Rate:", 
                    placeholderText: "Enter Acceleration/Deceleration Rate in fps^2" },
}

function AccAndDecRatePage() {

    const [fields, setFields] = useState({
        velocity: null,
        acceleration: null,
    });

    const [time, setTime] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Acceleration/Deceleration Rate"}
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
                onCalculate={() => {setTime(fields.velocity / fields.acceleration)}}
            />
            {time !== null && (
                <p>Calculated Time: {Number((time).toFixed(2))}</p>
            )}
        </div>
    );
}

export default AccAndDecRatePage;