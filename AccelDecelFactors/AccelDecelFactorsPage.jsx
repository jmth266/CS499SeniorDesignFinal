import ButtonGrid from "../../../components/ButtonGrid";

// Define a functional component for the AccelDecelFactorsPage
function AccelDecelFactorsPage() {
    // Define an array of navigation buttons with their corresponding routes and titles
    const navigationButtons = [
        { route: "/COFwithForceAndWeight", title: "Coefficient of Friction with Force and Weight" },
        { route: "/COFSpeedSkid", title: "COF with Speed and Skid" },
        { route: "/AccDecFactorSlowingAcceling", title: "Acc/Dec Factor Slowing/Acceling To/From Stop" },
        { route: "/AccDecFactorDistanceTime", title: "Acc/Dec Factor Distance and Time Slowing/Acceling to Another" },
        { route: "/AccDecFactorSpeedToSpeed", title: "Acc/Dec Factor When Vehicle Acc/Dec One Speed to Another" },
        { route: "/AccDecFactorRateKnown", title: "Acc/Dec Factor When Acc/Dec RATE Known" },
    ];

    return (
        <ButtonGrid categoryName={"Accel/Decel Factors"} buttons={navigationButtons} />
        // Render the ButtonGrid component with the category name and navigation buttons
    )
}

export default AccelDecelFactorsPage; // Export the AccelDecelFactorsPage component
