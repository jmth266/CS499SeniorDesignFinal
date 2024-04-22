import {useState} from 'react';
import Formula from "../../../../components/Formula";
import NumericField from "../../../../components/NumericField";
import {round} from "../../../../utils/Conversions";

const fieldDescriptions = {
    rate: { description: "Accel/Decel Rate:", placeholderText: "Enter Rate in fps" },
}

function AccDecFactorRateKnown() {

    const [fields, setFields] = useState({
        rate: null,
    });

    const [grade, setCOF] = useState(null);

    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Dec/Acc Factor When Dec/Acc RATE is Known"}
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
                onCalculate={() => {setCOF(fields.rate / 32.2)}}
            />
            {grade !== null && (
                <p>Coefficient of Friction: {round(grade)}</p>
            )}
        </div>
    );
}

export default AccDecFactorRateKnown;