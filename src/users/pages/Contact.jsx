import Header from "../components/Header"
import Footer from "../../components/Footer"
import { useInView } from 'react-intersection-observer'
import Chat from '../components/Chat'
import ScrollUp from '../../components/ScrollUp'
import { Container, Row, Col,Button,Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"


function Contact() {
  const [heroRef, inViewHero] = useInView({ triggerOnce: true, threshold: 0.5 })
  return (
    <div>
      <Header />

      {/* hero section */}
      <section className='pt-20 hero-section position-relative d-flex align-items-center'
        style={{
          backgroundImage: 'url(/images/hero/contacthero.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          width: '100%',
          backgroundRepeat: 'no-repeat'
        }} ref={heroRef}>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

        <div className={`container position-relative z-1 p-5 text-white text-center mt-4 ${inViewHero ? `animate__animated animate__fadeInLeft` : ''} `}>
          <h1 className='hero-title fw-bold lh-base mt-4' >We’d Love to Hear from You</h1>
          <p className='fs-5'>Let’s Craft Something Beautiful Together-<br />Reach Out!</p>

        </div>
      </section>

      {/* main */}
      <section className="py-5" style={{ backgroundColor: '#fff8f2' }}>
        <Container>
          <Row className="justify-content-center">

            {/* left contact info */}
            <Col md={5} className="px-5 py-2">
              <h4 className="fw-bold mb-3">Contact Us</h4>
              <p>For bulk orders, custom embroidery, or any queries - reach out to us anytime!</p>

              <div className="mb-4">

                <div className="mb-3 px-3 pt-2 bg-secondary-subtle rounded d-flex align-items-center">
                  <div className="">
                    <FontAwesomeIcon icon={faLocationDot} className="fs-3"/>
                  </div>
                  <div className="mt-1 ms-3">
                    <p className="mt-1">Thekkottil Embroideries, SVMPO, Kozhikodu, Karunagappally, Kollam, 690573</p>
                  </div>
                </div>

                 <div className="mb-3 px-3 pt-2 bg-secondary-subtle rounded d-flex align-items-center">
                  <div className="">
                    <FontAwesomeIcon icon={faPhone} className="fs-3"/>
                  </div>
                  <div className="ms-3 mt-1">
                    <p className="mt-1">+91 9496150833<br/>+91 8113848355</p>
                  </div>
                </div>

                 <div className="mb-3 px-3 pt-2 bg-secondary-subtle rounded d-flex align-items-center">
                  <div className="">
                    <FontAwesomeIcon icon={faEnvelope} className="fs-3"/>
                  </div>
                  <div className="ms-3 mt-1"style={{ wordBreak: 'break-word' }}>
                    <p className="mt-1">thekkottilembroideries2018@gmail.com</p>
                  </div>
                </div>

                 <div className="mb-3 px-3 pt-2 bg-secondary-subtle rounded d-flex align-items-center">
                  <div className="px-2">
                    <FontAwesomeIcon icon={faWhatsapp} className="fs-2"/>
                  </div>
                  <div className="px-2 mt-1">
                    <p className="mt-1">Message us on<br /> Whatsapp</p>
                  </div>
                </div>

              </div>

              <p className="fw-semibold fs-5 mxt4">Follow us on</p>
            <div className='d-flex gap-3 mb-4'>
              <a href='#'><FontAwesomeIcon icon={faInstagram} className="fs-2 text-dark"/></a>
              <a href='#'><FontAwesomeIcon icon={faWhatsapp} className="fs-2 text-dark"/></a>
              <a href='#'><FontAwesomeIcon icon={faFacebook} className="fs-2 text-dark"/></a>
            </div>
          </Col>

           {/* Right Contact Form */}
          <Col md={6} sm={10} xs={10}  className="px-md-4 py-2">
            <div className='p-3 rounded' style={{ background: '#f5f1ed'}}>
             <h4 className="fw-bold m-4">Get in Touch</h4>
              <Form className="p-3">
                <Form.Group className='mb-3'>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type='text' placeholder='Enter your Name' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type='email' placeholder='Enter your Email address' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Phone Number:</Form.Label>
                  <Form.Control type='text' placeholder='Enter your phone number' />
                </Form.Group>

                <Form.Group className='mb-3'>
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as='textarea' rows={4} placeholder='Type your message' />
                </Form.Group>

                <small className='text-muted'>
                  By registering I accept the <a href='#'>TnC</a> and <a href='#'>Privacy Policy</a> of the website and give my consent to receive updates via Message/Email 
                </small>

                <Form.Group className='mt-3 mb-3'>
                  <Form.Check type='checkbox' label='I am not a robot' />
                </Form.Group>

                <button className="action-btn px-5">
                  Send
                </button>
              </Form>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col md={5} className="p-4">
          <iframe src="https://www.google.com/maps/embed?pb=!4v1749528700206!6m8!1m7!1sz_edP2ChXBNBSHLpBS42dQ!2m2!1d9.044414881859256!2d76.52426951012589!3f270.18!4f0!5f0.7820865974627469" width="100%" height="450" style={{border:0, borderRadius:'1rem'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe></Col>
          <Col md={5} className="p-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.206697862319!2d76.52406203081709!3d9.044901388211342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06035b1ced9aad%3A0xcc71c479e4b1af72!2sTK%20Embroideries!5e0!3m2!1sen!2sin!4v1749528747188!5m2!1sen!2sin" width="100%" height="450" style={{border:0, borderRadius:'1rem'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></Col>
        </Row>

        </Container>
      </section>

      <Chat />
      <ScrollUp />
      <Footer />
    </div>
  )
}

export default Contact