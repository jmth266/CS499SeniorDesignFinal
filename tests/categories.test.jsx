import App from "../App.jsx";
import { render, screen } from "@testing-library/react";
import React from "react";

it('App displays the all categories', () => {
    render(<App />);
    const totalCategories = 8;   // Total number of categories
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(totalCategories); 

    const categoryNames = ["Conversion", "Kinetic Energy Equivalent Speed Loss/Gain", 
                            "Grade and Superelevation", "EDR", "Constant, Uniform, or Average Kinematic Equations", 
                            "Center of Mass Equations", "Radius Calculation", 
                            "Acceleration / Deceleration rate when Acceleration / Deceleration factor is known"];

    categoryNames.forEach(categoryName => {
    const categoryButton = screen.getByText(categoryName);
    expect(categoryButton).toBeInTheDocument();
    });

});
