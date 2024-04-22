// Define a functional component for a numeric input field
const NumericField = ({
    description,
    onChange,
    disabled,
    placeholderText,
    fieldMin = 0,
    fieldMax = Infinity,
    currValue,
}) => {
    // Function to handle input change
    const handleInputChange = (e) => {
        if (!disabled) {
            const newValue = e.target.value;
            // Use a regular expression to allow only numeric input
            const numericRegex = /^\d*\.?\d*$/;
            if (numericRegex.test(newValue) || newValue === "") {
                onChange(newValue);
            }
        }
    };

    return (
        <>
            <label className="form-label">
                {description} {/* Display the provided description */}
            </label>
            <input
                type="text"
                className={`form-control ${disabled ? "bg-gray-200" : ""}`}
                onChange={handleInputChange}
                disabled={disabled}
                placeholder={placeholderText}
                min={fieldMin}
                max={fieldMax}
                required={true}
                value={currValue}
                pattern="^\d*\.?\d*$" // Specify the numeric pattern
            />
        </>
    );
};

export default NumericField; // Export the NumericField component
