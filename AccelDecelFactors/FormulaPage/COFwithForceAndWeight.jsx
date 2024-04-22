import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/Conversions";

const fieldDescriptions = {
    Force: { description: "Force to Pull:", placeholderText: "Enter force in pounds" },
    Weight: { description: "Weight of Object Being Pulled:", placeholderText: "Enter weight in pounds" },
}

function COFwithForceAndWeight() {

    const [fields, setFields] = useState({
        Force: null,
        Weight: null,
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
                onCalculate={() => {setCOF(fields.Force / fields.Weight)}}
            />
            {grade !== null && (
                <p>Coefficient of Friction: {round(grade)}</p>
            )}
        </div>
    );
}

export default COFwithForceAndWeight;