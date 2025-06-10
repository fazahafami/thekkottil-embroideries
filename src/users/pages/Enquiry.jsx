import Header from "../components/Header"
import Footer from "../../components/Footer"
import { useInView } from 'react-intersection-observer'
import Chat from '../components/Chat'
import ScrollUp from '../../components/ScrollUp'
import { Container, Row, Form, Col, InputGroup, } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone} from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"


function Enquiry() {
  const [heroRef, inViewHero] = useInView({ triggerOnce: true, threshold: 0.5 })
  return (
    <div>
      <Header />
      {/* herosection */}
      <section className="pt-20 hero-section position-relative d-flex align-items-center"
        style={{
          backgroundImage: 'url(/images/hero/enquiryhero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          width: '100%',
          backgroundRepeat: 'no-repeat'
        }} ref={heroRef}>
        <div className="overlay positiob-absolute top-0 start-0 w-100 h-100"></div>

        <div className={`container position-relative z-1 p-5 text-white text-center mt-4 ${inViewHero ? `animate__animated animate__fadeInLeft` : ''} `}>
          <h1 className='hero-title fw-bold lh-base mt-4' >Let’s talk Embroidery</h1>
          <p className='fs-5'>Fill out the form below to make an enquiry.<br /> We’ll get back to you as soon as possible!</p>

        </div>
      </section>

      {/* main section */}
      <section className="py-5" style={{ background: '#e0e0e0' }}>
        <Container >
          <h3 className="fw-bold m-4 text-center">ENQUIRY FORM</h3>

          {/* form section */}
          <Row className="justify-content-center align-items-center">
            <Col md={6}>
              <Form className="p-3">
                <Form.Group as={Row} className='mb-3'>
                  <Form.Label column sm="3">Full Name:</Form.Label>
                  <Col sm='9'><Form.Control type='text' placeholder='Enter your Full Name' /></Col>
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                  <Form.Label column sm="3">Phone Number:</Form.Label>
                  <Col sm='9'><Form.Control type='text' placeholder='Enter your phone number' /></Col>
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                  <Form.Label column sm="3">Email Address:</Form.Label>
                  <Col sm='9'><Form.Control type='email' placeholder='Enter your Email address' /></Col>
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                  <Form.Label column sm="3">Type of Enquiry:</Form.Label>
                  <Col sm='9'>
                    <InputGroup className="">
                      <Form.Select id="inputGroupSelect01">
                        <option>Choose an option</option>
                        <option value="1">Services</option>
                        <option value="2">Price</option>
                        <option value="3">Other..</option>
                      </Form.Select>
                    </InputGroup>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                  <Form.Label column sm="3">Message:</Form.Label>
                  <Col sm='9'><Form.Control as='textarea' rows={4} placeholder='Type your message' /></Col>
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                  <Form.Label column sm="3">Preffered Callback Time:</Form.Label>
                  <Col sm='9'> <Form.Control type="time" className="mt-md-3 mt-0" /></Col>
                </Form.Group>

                <Form.Group as={Row} className='mb-3'>
                  <Form.Label column sm="3">Upload Design (Optional):</Form.Label>
                  <Col sm='9'> <InputGroup className="mt-md-3 mt-0">
                    <Form.Control type="file" />

                  </InputGroup></Col>
                </Form.Group>
                <div className="text-center mt-4">
                  <button className="action-btn px-5">
                    Submit
                  </button>
                </div>
              </Form>
            </Col>
          </Row>

          {/* contact details */}
          <Row className="justify-content-center align-items-center mt-4">
            <Col md={3}>
              <div className="bg-white rounded p-4 text-center">
                <h4 className="fw-bold">Prefer to Talk?</h4>
                <div className="ms-3 p-2 d-flex justify-content-center align-items-center">
                  <div className="">
                    <FontAwesomeIcon icon={faPhone} className="fs-3" />
                  </div>
                  <div className="ms-3 mt-1">
                    <p className="mt-1">+91 9496150833<br />+91 8113848355</p>
                  </div>
                </div>
                <div className="mb-3 px-3 pt-2 bg-success-subtle rounded d-flex justify-content-center align-items-center">
                  <div className="px-2">
                    <FontAwesomeIcon icon={faWhatsapp} className="fs-1" />
                  </div>
                  <div className="px-2 mt-1">
                    <p className="mt-1">Message us on<br /> Whatsapp</p>
                  </div>
                </div>
                <div className="mb-3 px-3 pt-2  align-items-center">
                  <p>Monday - Saturday <br /> 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              </Col>
          </Row>
        </Container>

      </section>



      <Chat />
      <ScrollUp />
      <Footer />
    </div>
  )
}

export default Enquiry