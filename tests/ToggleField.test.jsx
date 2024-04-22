import ToggleField from "../components/ToggleField.jsx";
import { render } from "@testing-library/react";

test("render ToggleField component with default values", () => {
    const { getByText } = render(<ToggleField description="Toggle" />);
    expect(getByText("Toggle")).toBeInTheDocument();
});

test("props test", () => {
    const description = "Test Description";
    const onChange = vi.fn();

    const { getByText } = render(
        <ToggleField description={description} onChange={onChange} />,
    );

    expect(getByText(description)).toBeInTheDocument();
});
