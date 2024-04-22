import ButtonGrid from "../../../components/ButtonGrid";


function SpeedOfAirborneObjectWithGradePage() {

    const navigationButtons = [
        { route: "/SpeedOfAirborneObjectWithGradeUphill", title: "Airborne Object Speed Uphill" },
        { route: "/SpeedOfAirborneObjectWithGradeDownhill", title: "Airborne Object Speed Downhill" },
        
    ];

    return(
        <ButtonGrid categoryName={"Speed of Airborne Objects Given Grade"} buttons={navigationButtons} />
    )
}

export default SpeedOfAirborneObjectWithGradePage;