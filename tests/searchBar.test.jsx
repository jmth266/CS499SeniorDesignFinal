// SearchBar.test.jsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { MemoryRouter as Router } from 'react-router-dom';
import SearchBar from '../components/searchBar';

describe('SearchBar', () => {
  it('renders the SearchBar component', () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('updates suggestions based on input value', async () => {
    render(
      <Router>
        <SearchBar />
      </Router>
    );

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'conversion' } });

  });

  it('navigates to the correct route when a suggestion is selected', async () => {
    // Create a memory history for testing with React Router
    const history = createMemoryHistory();

    // Render the component with the Router using the created history
    render(
      <Router initialEntries={['/']} history={history}>
        <SearchBar />
      </Router>
    );

    // Type a search term
    const searchInput = screen.getByPlaceholderText('Search');
    userEvent.type(searchInput, 'EDR');

    // Wait for suggestions to appear
    await waitFor(() => screen.getByText('EDR Category'));

    // Click on the suggestion
    const suggestionLink = screen.getByText('EDR Category');
    fireEvent.click(suggestionLink);

    // Wait for the navigation to occur
    await waitFor(() => {
      // Check if navigate function was called with the correct route
      expect(history.location.pathname).toBe('/');
    });

  });

});
