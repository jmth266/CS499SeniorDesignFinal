import { Container, Row, Col } from 'react-bootstrap';
import SearchBarCategory from '../components/searchCategory'; // Import the SearchBarCategory component
import SearchBarFormula from '../components/searchFormula'; // Import the SearchBarFormula component

// Define a functional component for the SearchPage
function SearchPage() {
    return(
        <Container>
        <Row className="my-4">
          <Col md={6}>
            <h2>Search Category:</h2>
            <br></br>
            <SearchBarCategory/> {/* Render the SearchBarCategory component */}
          </Col>
          <br></br><br></br>
        </Row>
        <Row className="my-4">
          <Col md={6}>
            <h2>Search Formulas:</h2>
            <br></br>
            <SearchBarFormula/> {/* Render the SearchBarFormula component */}
          </Col>
          <br></br><br></br>
        </Row>
      </Container>
    );
}

export default SearchPage; // Export the SearchPage component
