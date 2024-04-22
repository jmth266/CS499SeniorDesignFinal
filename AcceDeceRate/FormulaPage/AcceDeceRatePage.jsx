import { useState } from 'react';
import ToggleField from "../../../../components/ToggleField";
import Formula from "../../../../components/Formula";
import { round } from "../../../../utils/Conversions";
import {getNumericFields} from "../../../../utils/FieldCreator.jsx";
import {forceOfGravity} from "../../../../utils/Constants";

const accelerationFieldDescriptions = {
    coef: { description: "Coefficient of friction", placeholderText: "Enter the friction coefficient" },
}

// Field descriptions for the left side
const decelarationFieldDescriptions = {
    coef: { description: "Coefficient of friction", placeholderText: "Enter the friction coefficient" },
}


// Toggle field descriptions
const toggleFieldDescriptions = {
    isAcceleration: "Acceleration / Deceleration",
}



function AcceDeceRate() {
    const [fields, setFields] = useState({
        coef: null,
        isAcceleration: false,
    });

    const [result, setResult] = useState(null);

    const calculate = () => {
        if ((!fields.isAcceleration && fields.coef === null ) || (fields.isAcceleration && fields.coef === null  === null)) {
            alert("Please fill out all fields.");
        }
        else {
            fields.isAcceleration ? setResult( forceOfGravity*fields.coef) : setResult(forceOfGravity*fields.coef);
        }
    };

    const handleValueChange = (fieldName, newValue) => {
        (fieldName === "isAcceleration" && result) && setResult(null);
        setFields({ ...fields, [fieldName]: newValue });
    };




    const toggleFields = Object.keys(toggleFieldDescriptions).map(fieldName => (
        <ToggleField
            key={fieldName}
            description={toggleFieldDescriptions[fieldName]}
            value={fields[fieldName]}
            onChange={(newValue) => handleValueChange(fieldName, newValue)}
        />
    ));


    return (
        <div className={"container mb-5 center"}>
            <Formula
                formulaName={"Acceleration / Deceleration rate when Acceleration / Deceleration factor is known"}
                toggleFields={toggleFields}
                numericFields={fields.isAcceleration ? getNumericFields(fields, accelerationFieldDescriptions, handleValueChange) : getNumericFields(fields, decelarationFieldDescriptions, handleValueChange)}
                onCalculate={calculate}
            />
            <p>Force of gravity: 32.2 fps^2</p>

            {result !== null && (
                <p>{fields.isAcceleration ? "Deceleration rate" : "Acceleration rate"}: {round(result)} {fields.isAcceleration ? 'fps^2' : 'fps^2'}</p>
            )}
        </div>
    );
}

export default AcceDeceRate;
