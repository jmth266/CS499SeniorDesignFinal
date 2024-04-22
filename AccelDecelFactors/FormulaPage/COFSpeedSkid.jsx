import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/Conversions";

const fieldDescriptions = {
    Speed: { description: "Speed of Vehicle:", placeholderText: "Enter Speed in mph" },
    Skid: { description: "Skid (slide to stop) Distance:", placeholderText: "Enter skid distance in feet" },
}

function COFSpeedSkid() {

    const [fields, setFields] = useState({
        Speed: null,
        Skid: null,
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
                onCalculate={() => {setCOF((fields.Speed ** 2) / 30 * fields.Skid)}}
            />
            {grade !== null && (
                <p>Coefficient of Friction: {round(grade)}</p>
            )}
        </div>
    );
}

export default COFSpeedSkid;