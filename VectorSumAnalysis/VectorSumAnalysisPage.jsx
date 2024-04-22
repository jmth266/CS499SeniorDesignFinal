import ButtonGrid from "../../../components/ButtonGrid";

// Define a functional component for ChangeInVelocitySpeedScalar
function VectorSumAnalysisPage() {
    // Define an array of navigation buttons with their corresponding routes and titles
    const navigationButtons = [
        { route: "/XMomentumPage", title: "Vehicle Momentum Along X-Axis (mph)" }, // vehicle 1 or 2 in x direction
        { route: "/YMomentumPage", title: "Vehicle Momentum Along Y-Axis (mph)" }, // vehicle 1 or 2 in y direction
        { route: "/ResultantXMomentumPage", title: "Resultant Momentum Along X-Axis (mph)" }, // combined momentum of 2 vehicles in x direction
        { route: "/ResultantYMomentumPage", title: "Resultant Momentum Along Y-Axis (mph)" }, // combined momentum of 2 vehicles in y direction
        { route: "/TotalMomentumFromVectorPage", title: "Total Momentum Magnitude From Momentum Vectors (mph)" }, // total collision momentum using resultant vectors
        { route: "/MomentumFromWeightPage", title: "Total Momentum Magnitude From Speed and Weight (mph/fps)"},
        { route: "/TotalMomentumAlongXPage", title: "Total Momentum Along X-Axis (mph/fps)"},
        { route: "/SpeedVehicle1Page", title: "Speed of Vehicle 1 (mph)"},
        { route: "/SpeedVehicle2Page", title: "Speed of Vehicle 2 (mph)"},
        // Add more buttons as needed
    ];

    return (
        <ButtonGrid categoryName={"Vector Sum Analysis"} buttons={navigationButtons} />
        // Render the ButtonGrid component with the category name and navigation buttons
    );
}

export default VectorSumAnalysisPage; // Export component