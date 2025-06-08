import { Container, Row, Col, Navbar, Image, InputGroup } from 'react-bootstrap';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      
        <footer>
          <Container>
            <Row className='gx-5 py-4 px-md-0 px-2 justify-content-between'>
              {/* Logo and Contact Info */}
              <div className='col-12 col-md-4 px-4 mb-4 mb-md-0'>
                <Navbar.Brand as={Link} to='/' className="d-flex align-items-center">
                  <Image src='/images/logoHeader.png' width={180} height={60} alt="Logo" />
                </Navbar.Brand>
                <p className='mt-3 mb-0'>SVMPO, Kozhikodu,<br/> Karunagappally, Kollam, 690573</p>
                <p className="mb-0">Ph:+91 9496150833, +91 8113848355</p>
                <p>thekkottilembroideries2018@gmail.com</p>
              </div>
              {/* Newsletter */}
              <div className='col-12 col-md-4 px-4 mb-5 mb-md-0'>
                <h6 className="fw-bold">NEWSLETTER</h6>
                <p className="mb-2">Stay in the loop with Every Stitch - <br /> Subscribe to Our Newsletter!</p>
                <Form>
                  <InputGroup>
                    <Form.Control type="email" placeholder="Email Id" className="border-secondary" />
                    <Button variant="warning">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                  </InputGroup>
                </Form>
              </div>
              {/* Follow Us */}
              <div className='col-12 col-md-4 px-4'>
                <h6 className="fw-bold">FOLLOW US</h6>
                <p>Follow the Thread - <br />Connect with Us on Social Media!</p>
                <div className="d-flex gap-4 fs-4">
                  <a href="#"><FontAwesomeIcon icon={faWhatsapp} className="text-dark" /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-dark" /></a>
                  <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-dark" /></a>
                </div>
              </div>
            </Row>
          </Container>
          <div className='copyright text-center'>
          <p className='py-1'>Copyright © 2025 All rights reserved | Thekkottil Embroideries</p>
        </div>
           </footer>
        
      
      

    </>
  )
}

export default Footer