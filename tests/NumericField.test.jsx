// ensure the numeric field renders without crashing
import NumericField from "../components/NumericField.jsx";
import { fireEvent, render } from "@testing-library/react";

test("renders numeric field", () => {
    render(<NumericField />);
});

test("props test", () => {
    const description = "Test Description";
    const onChange = vi.fn();
    const disabled = false;
    const placeholderText = "Test Placeholder";
    const fieldMin = 0;
    const fieldMax = 100;
    const currValue = 50;

    const { getByText, getByPlaceholderText } = render(
        <NumericField
            description={description}
            onChange={onChange}
            disabled={disabled}
            placeholderText={placeholderText}
            fieldMin={fieldMin}
            fieldMax={fieldMax}
            currValue={currValue}
        />,
    );

    expect(getByText(description)).toBeInTheDocument();
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
});

test("input change test", () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
        <NumericField placeholderText="Enter a value..." onChange={onChange} />,
    );
    const input = getByPlaceholderText("Enter a value...");
    fireEvent.change(input, { target: { value: 50 } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(50);
});

test("disabled test", () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
        <NumericField
            placeholderText="Enter a value..."
            onChange={onChange}
            disabled={true}
        />,
    );
    const input = getByPlaceholderText("Enter a value...");
    fireEvent.change(input, { target: { value: 50 } });
    expect(onChange).toHaveBeenCalledTimes(0);
});

test("disabled styling test", () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
        <NumericField
            placeholderText="Enter a value..."
            onChange={onChange}
            disabled={true}
        />,
    );
    const input = getByPlaceholderText("Enter a value...");
    expect(input).toHaveClass("bg-gray-200");
});

test("placeholder test", () => {
    const { getByPlaceholderText } = render(
        <NumericField placeholderText="Enter a value..." />,
    );
    const input = getByPlaceholderText("Enter a value...");
    expect(input).toBeInTheDocument();
});

test("min test", () => {
    const { getByPlaceholderText } = render(
        <NumericField placeholderText="Enter a value..." fieldMin={0} />,
    );
    const input = getByPlaceholderText("Enter a value...");
    expect(input).toHaveAttribute("min", "0");
});

test("max test", () => {
    const { getByPlaceholderText } = render(
        <NumericField placeholderText="Enter a value..." fieldMax={100} />,
    );
    const input = getByPlaceholderText("Enter a value...");
    expect(input).toHaveAttribute("max", "100");
});

test("currValue test", () => {
    const { getByPlaceholderText } = render(
        <NumericField placeholderText="Enter a value..." currValue={50} />,
    );
    const input = getByPlaceholderText("Enter a value...");
    expect(input).toHaveValue(50);
});

test("NaN test", () => {
    const onChange = vi.fn();
    const { getByPlaceholderText } = render(
        <NumericField placeholderText="Enter a value..." onChange={onChange} />,
    );
    const input = getByPlaceholderText("Enter a value...");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(onChange).toHaveBeenCalledTimes(0);
});

test("required test", () => {
    const { getByPlaceholderText } = render(
        <NumericField placeholderText="Enter a value..." />,
    );
    const input = getByPlaceholderText("Enter a value...");
    expect(input).toBeRequired();
});
