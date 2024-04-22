import { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link, useNavigate } from 'react-router-dom';

// Define a functional component for a search bar
const SearchBar = () => {
  // Initialize state variables for input value and suggestions
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); // React Router's navigation hook

  // Define a mapping of search keywords to their corresponding routes
  const searchKeywords = {
    // Category Keywords
    "Conversion Category": "/Conversions",
    "Kinetic Energy Equivalent Category": "/KinEnergyEqvSpeedLGPage",
    "Grade and Super Elevation Category": "/GradeAndSuperElevationPage",
    "EDR Category": "/EDR",
    "Constant Uni-Avg Equation Category": "/ConstUniAvgEquationPage",
    "Center of Mass Equation Category": "/CenterOfMassEquationPage",
    // Formula Keywords
    "Speed/Velocity Converter Formula": "/Conversions/SpeedAndVelocity",
    "Minimum Speed / Velocity Slide to Stop Formula": "/SpeedVelocitySlidingToStopPage",
    "Percent Grade Formula": "/PercentGradePage",
    "Percent Superelevation Formula": "/PercentSuperelevationPage",
    "Adjusted Speed at Impact": "/EDR/SpeedAtImpact",
    "Constant Velocity (fps) Formula": "/ConstantVelocityPage",
    "Constant Time (s) Formula": "/ConstantTimePage",
    "Constant Distance (ft) Formula": "/ConstantDistancePage",
    "Slide to Stop Dist with Drag Formula": "/SlidetoStopDistWithDragPage",
    "Longitudinal CoM Formula": "/COMLongitudinalPage",
    "Lateral CoM Formula": "/COMLateralPage",
  };

  // Autosuggest will call this function every time you need to update suggestions
  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    // Filter keywords based on input value
    const matchingRoutes = Object.keys(searchKeywords).filter((route) =>
      route.toLowerCase().includes(inputValue)
    );
    setSuggestions(matchingRoutes);
  };

  // Autosuggest will call this function every time you need to clear suggestions
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // When a suggestion is selected, navigate to the corresponding route from the searchKeywords
  const onSuggestionSelected = (event, { suggestionValue }) => {
    navigate(searchKeywords[suggestionValue]);
    setValue(''); // Reset the search bar value after selecting a suggestion
  };

  // Input properties for Autosuggest component
  const inputProps = {
    className: 'form-control',
    placeholder: 'Search',
    value,
    onChange: (e, { newValue }) => {
      setValue(newValue);
    },
  };

  return (
    <div className="input-group"> {/* Use Bootstrap's input-group for styling */}
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={(suggestion) => (
          <Link to={searchKeywords[suggestion]} className="suggestion">
            {suggestion}
          </Link>
        )}
        inputProps={inputProps}
      />
      <div className="input-group-append">
        {/* You can add elements here if needed */}
      </div>
    </div>
  );
};

export default SearchBar; // Export the SearchBar component
