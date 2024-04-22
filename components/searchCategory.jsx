import { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link, useNavigate } from 'react-router-dom';


// Define a functional component for a search bar with category suggestions
const SearchBarCategory = () => {
    // Initialize state variables for input value and suggestions
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    // Define a mapping of search keywords to their corresponding routes
    const searchKeywords = {

        //Categroy Keywords
        "Conversion Category": "/Conversions",
        "Kinetic Energy Equivalent Category": "/KinEnergyEqvSpeedLGPage",
        "Grade and Super Elevation Category": "/GradeAndSuperElevationPage",
        "EDR Category": "/EDR",
        "Constant Uni-Avg Equation Category": "/ConstUniAvgEquationPage",
        "Center of Mass Equation Category": "/CenterOfMassEquationPage",
        "Combined Speed Equation Category": "/CombinedSpeedPage",
        "Acceleration/Deceleration Factors Equation Category": "/AccelDecelFactorsPage",
        "Drag Factor Adjustments Equation Category": "/DragFactorAdjustmentsPage",
        "Airborne Equations Category": "/AirborneEquationsPage",
        "Time and Distance Category": "/TimeAndDistanceEquationsPage",
        "Projection Efficiency" : "/ProjectionEfficiencyPage",
        "Change in Velocity/Speed Scalar Equations": "/ChangeInVelociySpeedScalarPage",
        "Vector Sum Analysis": "/VectorSumAnalysisPage",



    };

    // This function is called to update suggestions when input changes
    const onSuggestionsFetchRequested = ({ value }) => {
        const inputValue = value.trim().toLowerCase();
        const matchingRoutes = Object.keys(searchKeywords).filter((route) =>
            route.toLowerCase().includes(inputValue)
        );
        setSuggestions(matchingRoutes);
    };

    // This function is called to clear suggestions
    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    // When a suggestion is selected, navigate to the corresponding route
    const onSuggestionSelected = (event, { suggestionValue }) => {
        navigate(searchKeywords[suggestionValue]);
    };

    // Input properties for Autosuggest component
    const inputProps = {
        className: 'form-control',
        placeholder: 'Search Category',
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
            
        </div>

    );
};

export default SearchBarCategory;  //Export the SearchBarCategory component
