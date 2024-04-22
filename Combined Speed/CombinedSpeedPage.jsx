import ButtonGrid from "../../../components/ButtonGrid";

// Define a functional component for the CombinedSpeedPage
function CombinedSpeedPage() {
    // Define an array of navigation buttons with their corresponding routes and titles
    const navigationButtons = [
        { route: "/CombinedSpeed", title: "Combined Speed" },
        { route: "/CombinedSpeedMultipleSurfaces", title: "Combined Speed Multiple Surfaces" },
        
        
    ];

    return (
        <ButtonGrid categoryName={"Combined Speed Equations"} buttons={navigationButtons} />
        // Render the ButtonGrid component with the category name and navigation buttons
    )
}

export default CombinedSpeedPage; // Export the CombinedSpeedPage component
