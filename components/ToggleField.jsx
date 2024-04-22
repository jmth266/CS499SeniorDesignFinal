// Define a functional component for a radio button input field
const RadioButtonField = ({ description, value, onChange }) => {
    // Function to handle radio button changes
    const handleRadioChange = () => {
      onChange(!value); // Toggle the value when the radio button is clicked
    };
  
    return (
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="radio"
            checked={value}
            className="sr-only peer"
            onChange={handleRadioChange}
          />
          <div
            className={`w-5 h-5 border border-gray-400 rounded-full peer-checked:bg-blue-600 ${
              value ? "bg-blue-600" : "bg-gray-200"
            } peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800`}
          ></div>
          <span className="ml-3 text-sm font-bold">{description}</span>
        </label>
      </div>
    );
  };
  
  export default RadioButtonField; // Export the RadioButtonField component
  