import Header from "../components/Header"
import Footer from "../../components/Footer"
import { useInView } from 'react-intersection-observer'
import Chat from '../components/Chat'
import ScrollUp from '../../components/ScrollUp'
import { Container, Row,Col,Button } from "react-bootstrap"

function Contact() {
   const [heroRef, inViewHero] = useInView({ triggerOnce: true, threshold: 0.5 })
  return (
     <div>
        <Header/>
            
            {/* hero section */}
            <section className='pt-20 hero-section position-relative d-flex align-items-center'
            style={{
                backgroundImage:'url(/images/hero/contacthero.jpeg)',
                backgroundSize:'cover',
                backgroundPosition: 'center',
                height:'80vh',
                width:'100%',
                backgroundRepeat:'no-repeat'
            }} ref={heroRef}>
                <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

                <div className={`container position-relative z-1 p-5 text-white text-center mt-4 ${inViewHero ? `animate__animated animate__fadeInLeft` : ''} `}>
          <h1 className='hero-title fw-bold lh-base mt-4' >We’d Love to Hear from You</h1>
          <p className='fs-5'>Let’s Craft Something Beautiful Together-<br/>Reach Out!</p>
         
        </div>
            </section>

            {/* main */}
            <section className="py-5" style={{ backgroundColor: '#fff8f2' }}>
              <Container>
                <Row className="">

                  {/* left contact info */}
                  <Col md={4}>
                  <h4 className="fw-bold mb-3">Conatct Us</h4>
                  <p>For bulk orders, custom embroidery, or any queries - reach out to us anytime!</p>

                  <div className="mb-3">
                    <Button variant='light' className='w-100 text-start mb-2'>
                📍 Karunagappally, Kerala, India
              </Button>
              <Button variant='light' className='w-100 text-start mb-2'>
                📞 +91 xxxxxxxxxx
              </Button>
              <Button variant='light' className='w-100 text-start mb-2'>
                ✉️ tehtotil@gmail.com
              </Button>
              <Button variant='light' className='w-100 text-start mb-2'>
                💬 Message on Whatsapp
              </Button>
                  </div>
                  </Col>

                </Row>
              </Container>
            </section>

            <Chat/>
            <ScrollUp/>
            <Footer/>
    </div>
  )
}

export default Contact