import ButtonGrid from "../../../components/ButtonGrid";

// Define a functional component for the AirborneEquationsPage
function AirborneEquationsPage() {
    // Define an array of navigation buttons with their corresponding routes and titles
    const navigationButtons = [
        { route: "/SpeedOfAirborneObjectWithGradePage", title: "Airborne Object Speed with Grade" },
        { route: "/VelocityOfAirborneObjectWithGradePage", title: "Airborne Object Velocity with Grade" },
        { route: "/SpeedOfAirborneObjectWithAngle", title: "Airborne Object Speed with Angle" },
        { route: "/VelocityOfAirborneObjectWithAngle", title: "Airborne Object Velocity with Angle" },
        { route: "/AirborneSpeedLevelSurface", title: "Airborne Object Speed off Level Surface" },
        { route: "/AirborneVelocityLevelSurface", title: "Airborne Object Velocity off Level Surface" },
        { route: "/HighestPointOnFlightPath", title: "Highest Point on a Flight Path" },
    ];

    return (
        <ButtonGrid categoryName={"Airborne Equations"} buttons={navigationButtons} />
        // Render the ButtonGrid component with the category name and navigation buttons
    )
}

export default AirborneEquationsPage; // Export the AirborneEquationsPage component