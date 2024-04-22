import ButtonGrid from "../../../components/ButtonGrid";


function VelocityOfAirborneObjectWithGradePage() {

    const navigationButtons = [
        { route: "/VelocityOfAirborneObjectWithGradeUphill", title: "Airborne Object Velocity Uphill" },
        { route: "/VelocityOfAirborneObjectWithGradeDownhill", title: "Airborne Object Velocity Downhill" },
        
    ];

    return(
        <ButtonGrid categoryName={"Velocity of Airborne Objects Given Grade"} buttons={navigationButtons} />
    )
}

export default VelocityOfAirborneObjectWithGradePage;