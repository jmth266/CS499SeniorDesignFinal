import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConstantDistancePage from '../pages/CategoryPages/ConstUniAvgEquation/FormulaPage/ConstantDistancePage';

test('renders the ConstantDistancePage component', () => {
  render(<ConstantDistancePage />);
  expect(screen.getByText(/Constant Distance \(ft\)/i)).toBeInTheDocument();
});

test('calculates constant distance with a 0 input correctly', () => {
  render(<ConstantDistancePage />);
  
  
  const velocityInput = screen.getByPlaceholderText('Enter velocity in fps');
  const timeInput = screen.getByPlaceholderText('Enter time in seconds');

  fireEvent.change(velocityInput, { target: { value: '0' } });
  fireEvent.change(timeInput, { target: { value: '80' } });

  // Trigger the calculate function
  fireEvent.click(screen.getByText('Calculate'));

  // Check if the result for constant distance is displayed correctly
  expect(screen.getByText(/Constant Distance: 0 ft/i)).toBeInTheDocument();

});

test('calculates constant distance correctly (1)', () => {
    render(<ConstantDistancePage />);
    
    
    const velocityInput = screen.getByPlaceholderText('Enter velocity in fps');
    const timeInput = screen.getByPlaceholderText('Enter time in seconds');
  
    fireEvent.change(velocityInput, { target: { value: '10' } });
    fireEvent.change(timeInput, { target: { value: '5' } });
  
    fireEvent.click(screen.getByText('Calculate'));
  
    expect(screen.getByText(/Constant Distance: 50 ft/i)).toBeInTheDocument();
  
  });

  test('calculates constant distance correctly (2)', () => {
    render(<ConstantDistancePage />);
    
    
    const velocityInput = screen.getByPlaceholderText('Enter velocity in fps');
    const timeInput = screen.getByPlaceholderText('Enter time in seconds');
  
    fireEvent.change(velocityInput, { target: { value: '5' } });
    fireEvent.change(timeInput, { target: { value: '6' } });
  
    // Trigger the calculate function
    fireEvent.click(screen.getByText('Calculate'));
  
    // Check if the result for constant distance is displayed correctly
    expect(screen.getByText(/Constant Distance: 30 ft/i)).toBeInTheDocument();
  
  });

  test('calculates decimal inputs correctly', () => {
    render(<ConstantDistancePage />);
    
    
    const velocityInput = screen.getByPlaceholderText('Enter velocity in fps');
    const timeInput = screen.getByPlaceholderText('Enter time in seconds');
  
    fireEvent.change(velocityInput, { target: { value: '5.2' } });
    fireEvent.change(timeInput, { target: { value: '6.9' } });
  
    // Trigger the calculate function
    fireEvent.click(screen.getByText('Calculate'));
  
    // Check if the result for constant distance is displayed correctly
    expect(screen.getByText(/Constant Distance: 35.88 ft/i)).toBeInTheDocument();
  
  });


  
  
