import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/Conversions";

const fieldDescriptions = {
    time: { description: "Time Vehicle Travels Measured Distance:", placeholderText: "Enter time in seconds" },
    Distance: { description: "Distance Vehicle Travels:", placeholderText: "Enter Distance in feet" },
}

function AccDecFactorDistanceTime() {

    const [fields, setFields] = useState({
        time: null,
        Distance: null,
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
                onCalculate={() => {setCOF((fields.Distance / 16.1) * fields.time ** 2)}}
            />
            {grade !== null && (
                <p>Coefficient of Friction: {round(grade)}</p>
            )}
        </div>
    );
}

export default AccDecFactorDistanceTime;