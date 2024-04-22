import ButtonGrid from "../../../components/ButtonGrid";

// Define a functional component for ChangeInVelocitySpeedScalar
function ChangeInVelocitySpeedScalar() {
    // Define an array of navigation buttons with their corresponding routes and titles
    const navigationButtons = [
        { route: "/ChangeInVelocityVehicle1Page", title: "Change in Velocity Vehicle 1 (fps)" },
        { route: "/ChangeInSpeedVehicle1Page", title: "Change in Speed Vehicle 1 (mph)" }, 
        { route: "/ChangeInVelocityVehicle2Page", title: "Change in Velocity Vehicle 2 (fps)" },
        { route: "/ChangeInSpeedVehicle2Page", title: "Change in Speed Vehicle 2 (mph)" },
        { route: "/ChangeInVelocityUsingBetaPage", title: "Change in Velocity Using Beta (fps)" },
        { route: "/ChangeInSpeedUsingBetaPage", title: "Change in Speed Using Beta (mph)" }
        // Add more buttons as needed
    ];

    return (
        <ButtonGrid categoryName={"Change in Velocity/Speed Scalar Equations"} buttons={navigationButtons} />
        // Render the ButtonGrid component with the category name and navigation buttons
    );
}

export default ChangeInVelocitySpeedScalar; // Export component