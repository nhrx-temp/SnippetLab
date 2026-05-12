import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Navigation = ({ setView }) => (
  <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 px-4 shadow border-bottom border-secondary">
    <Container fluid>
      <Navbar.Brand 
        href="#" 
        onClick={() => setView('list')} 
        className="fw-bold fs-4 text-success"
      >
        SnippetLab
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link onClick={() => setView('list')} className="px-3">Tüm Kodlar</Nav.Link>
          <Nav.Link 
            onClick={() => setView('create')} 
            className="btn btn-outline-success btn-sm text-white px-4 ms-lg-2"
          >
            + Yeni Ekle
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
