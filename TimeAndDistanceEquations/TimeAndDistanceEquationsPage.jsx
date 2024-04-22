import React from 'react';
import ButtonGrid from "../../../components/ButtonGrid";

function TimeAndDistancePage() {
    const navigationButtons = [
        { route: "/GravityAndVelocityPage", title: "Time To Accelerate/Decelerate To Stop Page" },
        { route: "/AccAndDecRatePage", title: "Acceleration/Deceleration Rate"},
        { route: "/VelocityAndAccelerationPage", title: "Velocity and Acceleration"},
        { route: "/AccFromOneSpeedToAnotherPage", title: "Acceleration/Deceleration from One Speed to Another"},
        { route: "/DistanceToAccOrDecPage", title: "Distance for Vehicle to Acclerate/Declerate from stop/to start"},
        { route: "/TimeForVehicleToStopPage", title: "Distance for Vehicle to Acclerate/Declerate from stop/to start with Acc/Dec rates known"},
        { route: "/DistanceObjectTraveledWithKnownAccDecRatePage", title: "Distance Object Traveled with Known Acc/Dec Rate"},
        { route: "/DistanceObjectTraveledWithKnownAccDecFactorPage", title: "Distance Object Traveled with Known Acc/Dec Factor"},
        { route: "/VelocityDuringAccDecRatePage", title: "Velocity at any time during Acceleration/Deceleration Rate "},
        { route: "/VelocityDuringAccDecFactorPage", title: "Velocity at any time during Acceleration/Deceleration Factor "},
        { route: "/VelocityAtDistanceFromAccDecRatePage", title: "Velocity at any distance during Acceleration/Deceleration Rate"},
        { route: "/VelocityAtDistanceFromAccDecFactorPage", title: "Velocity at any distance during Acceleration/Deceleration Factor"},
    ];

    return (
        <>
  
            <ButtonGrid  categoryName={"Time and Distance"} buttons={navigationButtons} />
        </>
    );
}

export default TimeAndDistancePage;
