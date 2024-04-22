import ButtonGrid from "../../../components/ButtonGrid";

// Define a functional component for the CenterOfMassEquation
function CenterOfMassEquation() {
    // Define an array of navigation buttons with their corresponding routes and titles
    const navigationButtons = [
        { route: "/COMLongitudinalPage", title: "Longitudinal CoM (in)" },
        { route: "/COMLateralPage", title: "Lateral CoM (in)" },
    ];

    return (
        <ButtonGrid categoryName={"Center of Mass Equations"} buttons={navigationButtons} />
        // Render the ButtonGrid component with the category name and navigation buttons
    )
}

export default CenterOfMassEquation; // Export the CenterOfMassEquation component
