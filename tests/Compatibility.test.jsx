import React from 'react';
import { render } from '@testing-library/react';
import App from '../App.jsx';

test('renders without crashing', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  
test('renders correctly on web version', () => {
    // Set the window width to simulate a web view
    global.innerWidth = 1024;
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  
test('renders correctly on tablet version', () => {
    // Set the window width to simulate a tablet view
    global.innerWidth = 768;
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  test('renders correctly on mobile version', () => {
    // Set the window width to simulate a mobile view
    global.innerWidth = 375;
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
