
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation()

  return (
    <>
      <Navbar bg="white" expand="md" className="shadow-sm" fixed="top">
        <Container fluid className="py-1 px-4">
          {/* Logo & Brand */}
          <Navbar.Brand as={Link} to='/' className="d-flex align-items-center">
            <Image src='/images/logoHeader.png'fluid style={{ maxWidth: '180px', height: 'auto' }} alt="Logo" />
          </Navbar.Brand>

          {/* Toggle for small screens */}
          <Navbar.Toggle aria-controls="main-navbar" />

          {/* Collapsible Nav */}
          <Navbar.Collapse id="main-navbar" className="justify-content-between">
            {/* Nav links center */}
            <Nav className="flex-column flex-md-row mx-auto text-center">
              <Nav.Link as={Link} to="/" style={{ color: '#003049' }} className={`custom-navlink fw-bold ${location.pathname === '/' ? 'active-link' : ''}`}>Home</Nav.Link>
              <Nav.Link as={Link} to="/services" style={{ color: '#003049' }} className={`custom-navlink fw-bold ${location.pathname === '/services' ? 'active-link' : ''}`}>Services</Nav.Link>
              <Nav.Link as={Link} to="/gallery" style={{ color: '#003049' }} className={`custom-navlink fw-bold ${location.pathname === '/gallery' ? 'active-link' : ''}`}>Gallery</Nav.Link>
              <Nav.Link as={Link} to="/blog" style={{ color: '#003049' }} className={`custom-navlink fw-bold ${location.pathname === '/blog' ? 'active-link' : ''}`}>Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: '#003049' }} className={`custom-navlink fw-bold ${location.pathname === '/contact' ? 'active-link' : ''}`}>Contact</Nav.Link>
            </Nav>

            {/* Right side buttons */}
            <div className="d-flex gap-2 mt-3 mt-md-0 justify-content-between">
              <Link to={'/enquiry'}><button className="action-btn text-nowrap">Enquire Now</button></Link>
              <button className="action-btn text-nowrap">Book a Callback</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Header;
