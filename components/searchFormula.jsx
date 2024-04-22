import { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link, useNavigate } from 'react-router-dom';

// Define a functional component for a search bar with formula suggestions
const SearchBarFormula = () => {
  // Initialize state variables for input value and suggestions
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate(); // React Router's navigation hook

  // Define a mapping of formula keywords to their corresponding routes
  const searchKeywords = {
    // Formula Keywords
    "Speed/Velocity Converter Formula": "/Conversions/SpeedAndVelocity",
    "Minimum Speed / Velocity Slide to Stop": "/SpeedVelocitySlidingToStopPage",
    "Percent Grade Formula": "/PercentGradePage",
    "Percent Superelevation Formula": "/PercentSuperelevationPage",
    "Adjusted Speed at Impact": "/EDR/SpeedAtImpact",
    "Constnat Velocity (fps)": "/ConstantVelocityPage",
    "Constant Time (s) Formula": "/ConstantTimePage",
    "Constant Distance (ft) Formula": "/ConstantDistancePage",
    "Slide to Stop Dist with Drag Formula": "/SlidetoStopDistWithDragPage",
    "CoM Longitudinal Formula": "/COMLongitudinalPage",
    "CoM Lateral Formula": "/COMLateralPage",
    "COF Braking / Roadway Slope": "/COFWithRoadwaySlope",
    "COF Braking / Percentage Grade": "/COFWithRoadwayGrade",
    "COF braking / percentage of Grade": "/COFGradeUphillDownhill",
    "COF superelevation lost lateral stability": "/COFSuperElevation",
    "Combined Speed/Velocity": "/StartingCombinedSpeedPage",
    "Combined Speed Gain/Loss Multiple Surfaces": "/CombinedSpeedMultipleSurfaces",
    "Airborne Speed Level Surface": "/AirborneSpeedLevelSurface",
    "Airborne Velocity Level Surface": "/AirborneVelocityLevelSurface",
    "Highest Point Flight Path": "/HighestPointOnFlightPath",
    "Speed Airborne Object with Angle": "/SpeedOfAirborneObjectWithAngle",
    "Speed Airborne Object with Grade Downhill": "/SpeedOfAirborneObjectWithGradeDownhill",
    "Speed Airborne Object with Grade Uphill": "/SpeedOfAirborneObjectWithGradeUphill",
    "Velocity Airborne Object with Angle": "/VelocityOfAirborneObjectWithAngle",
    "Velocity Airborne Object with Grade Uphill": "/VelocityOfAirborneObjectWithGradeUphill",
    "Velocity Airborne Object with Grade Downhill": "/VelocityOfAirborneObjectWithGradeDownhill",
    "Acceleration / Deceleration Factor Distance Time": "AccDecFactorDistanceTime",
    "Acceleration / Deceleration Factor Rate Known": "AccDecFactorRateKnown",
    "Acceleration / Deceleration Factor Slowing Acceleration": "AccDecFactorDistanceSlowingAcceleration",
    "Acceleration / Deceleration Factor Vehicle Slows or Accelerates From One Speed to Another Time Known": "AccDecFactorSpeedToSpeed",
    "Coefficient of Friction Speed Skid": "COFSpeedSkid",
    "Coefficient of Friction Force Weight": "COFwithForceAndWeight",
    // Time and Distance Equations
    "Time To Accelerate/Decelerate To Stop Page": "/GravityAndVelocityPage",
    "Acceleration/Deceleration Rate": "/AccAndDecRatePage",
    "Velocity and Acceleration": "/VelocityAndAccelerationPage",
    "Acceleration/Deceleration from One Speed to Another": "/AccFromOneSpeedToAnotherPage",
    "Distance for Vehicle to Acclerate/Declerate from stop/to start": "/DistanceToAccOrDecPage",
    "Distance for Vehicle to Acclerate/Declerate from stop/to start with Acc/Dec rates known": "/TimeForVehicleToStopPage",
    "Distance Object Traveled with Known Acc/Dec Rate": "/DistanceObjectTraveledWithKnownAccDecRatePage",
    "Distance Object Traveled with Known Acc/Dec Factor": "/DistanceObjectTraveledWithKnownAccDecFactorPage",
    "Velocity at any time during Acceleration/Deceleration Rate ": "/VelocityDuringAccDecRatePage",
    "Velocity at any time during Acceleration/Deceleration Facotr ": "/VelocityDuringAccDecFactorPage",
    "Velocity at any distance during Acceleration/Deceleration Rate": "/VelocityAtDistanceFromAccDecRatePage",
    "Velocity at any distance during Acceleration/Deceleration Factor": "/VelocityAtDistanceFromAccDecFactorPage",
    // Change in Velocity/Speed Scalar Equations
    "Change in Velocity Vehicle 1 (fps)": "/ChangeInVelocityVehicle1Page",
    "Change in Speed Vehicle 1 (mph)": "/ChangeInSpeedVehicle1Page",
    "Change in Velocity Vehicle 2 (fps)": "/ChangeInVelocityVehicle2Page",
    "Change in Speed Vehicle 2 (mph)": "/ChangeInSpeedVehicle2Page",
    "Change in Velocity Using Beta (fps)": "/ChangeInVelocityUsingBetaPage",
    "Change in Speed Using Beta (mph)": "/ChangeInSpeedUsingBetaPage",
    //Vector Sum Analysis
    "Vehicle Momentum Along X-Axis (mph)": "/XMomentumPage",
    "Vehicle Momentum Along Y-Axis (mph)": "/YMomentumPage",
    "Resultant Momentum Along X-Axis (mph)": "/ResultantXMomentumPage",
    "Resultant Momentum Along Y-Axis (mph)": "/ResultantYMomentumPage",
    "Total Momentum Magnitude From Momentum Vectors (mph)": "/TotalMomentumFromVectorPage",
    "Total Momentum Magnitude From Speed and Weight (mph/fps)": "/MomentumFromWeightPage",
    "Total Momentum Along X-Axis (mph/fps)": "/TotalMomentumAlongXPage",
    "Speed of Vehicle 1 (mph)": "/SpeedVehicle1Page",
    "Speed of Vehicle 2 (mph)": "/SpeedVehicle2Page",
  };

  // This function is called to update suggestions when input changes
  const onSuggestionsFetchRequested = ({ value }) => {
    const inputValue = value.trim().toLowerCase();
    // Filter keywords based on input value
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
    placeholder: 'Search Formula',
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

export default SearchBarFormula; // Export the SearchBarFormula component
