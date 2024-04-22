import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './searchBar';
import LeftArrowIcon from './left_arrow.png'; // Import SVG file


function NavBar() {
  const navigate = useNavigate(); // Use useNavigate hook to get navigation function

  const goBack = () => {
    navigate(-1); // Navigate back one step in history
  };
  const disabledPaths = ['/Calculator', '/HomePage','/SearchPage'];

  // Check if the current location matches any of the disabled paths
  const disableBackButton = disabledPaths.includes(location.pathname);
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
        {/* Conditionally render the back button based on the disableBackButton condition */}

        {!disableBackButton && (
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={goBack}>
                <img src={LeftArrowIcon} alt="Left arrow icon" style={{ width: '24px', height: '24px' }} /> {/* Render SVG icon */}
              </button>
            </li>
          )}
        <li className="nav-item">
            <Link to="/HomePage" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Calculator" className="nav-link">Calculator</Link>
          </li>
          <li className="nav-item">
            <Link to="/SearchPage" className="nav-link">Search</Link>
          </li>
          <li className="nav-item">
            <SearchBar />
          </li>
  
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
