import { render, screen } from "@testing-library/react";
import Formula from "../components/Formula.jsx";

describe("Formula component tests", () => {
    it("renders Formula component with default values", () => {
        render(<Formula />);
        expect(screen.getByText("Formula")).toBeInTheDocument();
        expect(screen.getByText("Calculate")).toBeInTheDocument();
    });

    it("renders Formula component with custom values", () => {
        const formulaName = "Custom Formula";
        const numericFields = ["Field 1", "Field 2"];
        const toggleFields = ["Toggle 1", "Toggle 2"];

        render(
            <Formula
                formulaName={formulaName}
                numericFields={numericFields}
                toggleFields={toggleFields}
            />,
        );

        expect(screen.getByText(formulaName)).toBeInTheDocument();

        numericFields.forEach((field) => {
            expect(screen.getByText(field)).toBeInTheDocument();
        });

        toggleFields.forEach((field) => {
            expect(screen.getByText(field)).toBeInTheDocument();
        });

        expect(screen.getByText("Calculate")).toBeInTheDocument();
    });
});
