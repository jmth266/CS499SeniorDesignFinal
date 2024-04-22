import NumericField from "../components/NumericField";

export const getNumericFields = (fields, fieldDescriptions, handleValueChange) => {

    return Object.keys(fieldDescriptions).map(fieldName => (
        <NumericField
            key={fieldName}
            description={fieldDescriptions[fieldName].description}
            value={fields[fieldName]}
            onChange={(newValue) => handleValueChange(fieldName, newValue)}
            placeholderText={fieldDescriptions[fieldName].placeholderText}
            fieldMin={fieldDescriptions[fieldName].fieldMin}
            fieldMax={fieldDescriptions[fieldName].fieldMax}
            alertMessage={fieldDescriptions[fieldName].alertMessage}
        />
    ));
};
