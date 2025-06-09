import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Col, Container, Row, Image, Carousel, Card, CardImg } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import ScrollUp from '../../components/ScrollUp'
import Chat from '../components/Chat'

function Home() {
  const [heroRef, inViewHero] = useInView({ triggerOnce: true, threshold: 0.5 })
  const [aboutLeftRef, inViewAboutLeft] = useInView({ triggerOnce: true, threshold: 0.25 })
  const [aboutRightRef, inViewAboutRight] = useInView({ triggerOnce: true, threshold: 0.25 })
  const [servicesRef, inViewServices] = useInView({ triggerOnce: true, threshold: 0.25 });
  const [galleryRef, inViewGallery] = useInView({ triggerOnce: true, threshold: 0.25 });
  const [quickOrderRef, inViewQuickOrder] = useInView({ triggerOnce: true, threshold: 0.25 })
  const [blogRef, inViewBlog] = useInView({ triggerOnce: true, threshold: 0.25 })
  const [testimonialsRef, inViewTestimonials] = useInView({ triggerOnce: true, threshold: 0.25 })

  const serviceItems = [
    { img: 'custlogo.png', text: 'Custom Logos' },
    { img: 'saree.png', text: 'Saree Embroidery' },
    { img: 'salwar.png', text: 'Churidar Embroidery' },
    { img: 'scallop.png', text: 'Scallop Work' },
    { img: 'shirt.png', text: 'Shirt Embroidery' }
  ];

  const galleryItems = [
    'churidar.jpeg', 'tshirt.jpeg', 'rose.jpeg', 'gown.jpeg', 'saree.jpeg', 'scallop.jpeg'
  ]

  return (
    <>
      <Header />

      {/* hero section */}
      <section className='pt-20 hero-section position-relative d-flex align-items-center ' style={{
        backgroundImage: 'url(/images/hero/homehero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        width: '100%',
        backgroundRepeat: 'no-repeat'
      }} ref={heroRef} >
        <div className='overlay position-absolute top-0 start-0 w-100 h-100' ></div>

        <div className={`container position-relative z-1 py-5 text-white px-4 ${inViewHero ? `animate__animated animate__fadeInLeft` : ''} `}>
          <h1 className='hero-title fw-bold lh-base' >Where Threads <br />Weave Stories</h1>
          <Link to={'/gallery'}><button className={`btn btn-warning rounded-pill mt-0 mt-md-3 px-4 py-2 shadow fw-semibold ${inViewHero ? 'animate__animated animate__bounce animate__delay-1s' : ''}`}>EXPLORE</button></Link>
        </div>


      </section>

      {/* about us section */}
      <div className='py-5' style={{ backgroundColor: '#ffe9df' }}>
        <Container>
          <Row className='align-items-center flex-column-reverse flex-md-row'>
            <Col md={7} ref={aboutLeftRef} className={`${inViewAboutLeft ? 'animate__animated animate__fadeInLeft' : ''}`}>
              <h2 className='fw-bold text-center' style={{ color: '#701515' }}>An Unforgettable Experience</h2>
              <p className='text-md-end text-start mt-3 px-md-0 px-3'> Welcome to <strong>Thekkottil Embroideries</strong>, established in 2018 in Karunagappally. We are a dedicated embroidery unit
                specializing in intricate designs on women's saris, churidars, laces, scallop work, and custom logos.
                With a team of skilled artisans and a commitment to quality, we bring a blend of traditional craftsmanship and
                modern styles to every piece. Whether you're looking for elegant embellishments or personalized embroidery,
                Thekkottil Embroideries is your trusted partner for exceptional, tailor-made solutions.</p>
              <div className='text-center text-md-end mt-3'>
                {/* <Link to={'/services'}><button className='about-btn'>WE OFFER</button></Link> */}
                <Link to={'/services'}><button className={`btn btn-dark rounded-pill mt-0 mt-md-3 px-4 py-2 shadow fw-semibold ${inViewAboutLeft ? 'animate__animated animate__bounce animate__delay-1s' : ''}`}>WE OFFER</button></Link>
              </div>
            </Col>

            <Col md={5} ref={aboutRightRef} className={`text-center mb-5 mb-md-0 ${inViewAboutRight ? 'animate__animated animate__fadeInRight' : ''}`}>
              <Image
                src='/images/machine.jpeg'
                roundedCircle
                fluid
                style={{ maxWidth: '350px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
                alt="Embroiderymachine" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* services&gallery */}
      <div>
        <Row className='g-0'>

          {/* services section */}
          <Col md={3} className='p-5' style={{ backgroundColor: '#F5EFE0' }} ref={servicesRef}>
            <div>
              <h3 className='mb-4 text-center fw-bold' style={{ color: '#00304' }}>Services</h3>
              <div className='d-md-flex d-none flex-column align-items-center gap-4'>
                {serviceItems.map((item, index) => (
                  <div
                    key={index}
                    className={`text-center ${inViewServices ? 'animate__animated animate__fadeInLeft' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
                  >
                    <img src={`/images/services/${item.img}`} alt={item.text} style={{ width: '90px', height: '90px' }} />
                    <p className='mt-1 mb-0'>{item.text}</p>
                  </div>
                ))}
              </div>
              {/* SMALL SCREENS: Carousel */}
              <div className='d-md-none d-block'>
                <Carousel interval={2000}>
                  {
                    serviceItems.map((item, index) => (
                      <Carousel.Item key={index}>
                        <div className='text-center py-4'>
                          <img src={`/images/services/${item.img}`} alt={item.text} style={{ width: '90px', height: '90px' }} />
                          <p className='mt-3 fw-semibold'>{item.text}</p>
                        </div>
                      </Carousel.Item>
                    ))
                  }
                </Carousel>
              </div>
              <div className='text-center mt-md-4 mt-0 '>
                <Link to="/services">
                  <button className={`btn text-white rounded-pill px-4 shadow fw-semibold ${inViewServices ? 'animate__animated animate__bounce animate__delay-1s' : ''}`} style={{ backgroundColor: '#9B663F' }}>
                    View All Services
                  </button>
                </Link>
              </div>
            </div>
          </Col>


          {/* gallery section */}
          <Col md={9} className='p-5' style={{ backgroundColor: '#FFF9EA' }} ref={galleryRef}>
            <div>
              <h3 className='mb-4 text-center fw-bold' style={{ color: '#003049' }}>Gallery</h3>
              <Row className='gx-3 gy-3'>
                <div className='row d-md-flex d-none mt-5'>
                  {/* First Column */}
                  <Col xs={12} md={4} className={`d-flex flex-column gap-3 ${inViewGallery ? 'animate__animated animate__fadeInRight' : ''}`}
                    style={{ animationDelay: '0s', animationFillMode: 'both' }}>
                    <img
                      src='/images/gallery/churidar.jpeg'
                      alt='Design 1'
                      className='img-fluid w-100 rounded shadow-sm'
                      style={{ height: '58%', objectFit: 'cover' }}
                    />
                    <img
                      src='/images/gallery/tshirt.jpeg'
                      alt='Design 2'
                      className='img-fluid w-100 rounded shadow-sm'
                      style={{ height: '38%', objectFit: 'cover' }}
                    />
                  </Col>
                  {/* Second Column  */}
                  <Col xs={12} md={4} className={`d-flex flex-column gap-3 ${inViewGallery ? 'animate__animated animate__fadeInRight' : ''}`}
                    style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                    <img
                      src='/images/gallery/rose.jpeg'
                      alt='Design 3'
                      className='img-fluid w-100 rounded shadow-sm'
                      style={{ height: '38%', objectFit: 'cover' }}
                    />
                    <img
                      src='/images/gallery/gown.jpeg'
                      alt='Design 4'
                      className='img-fluid w-100 rounded shadow-sm'
                      style={{ height: '58%', objectFit: 'cover' }}
                    />
                  </Col>
                  {/* Third Column  */}
                  <Col xs={12} md={4} className={`d-flex flex-column gap-3 ${inViewGallery ? 'animate__animated animate__fadeInRight' : ''}`}
                    style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                    <img
                      src='/images/gallery/saree.jpeg'
                      alt='Design 5'
                      className='img-fluid w-100 rounded shadow-sm'
                      style={{ height: '58%', objectFit: 'cover' }}
                    />
                    <img
                      src='/images/gallery/scallop.jpeg'
                      alt='Design 5'
                      className='img-fluid w-100 rounded shadow-sm'
                      style={{ height: '38%', objectFit: 'cover' }}
                    />
                  </Col>
                </div>

                <div className='d-block d-md-none'>
                  <Carousel interval={2000}>
                    {
                      galleryItems.map((item, index) => (
                        <Carousel.Item key={index}>
                          <div className="text-center">
                            <img
                              src={`/images/gallery/${item}`}
                              alt={`Design ${index + 1}`}
                              className='img-fluid rounded shadow-sm'
                              style={{ height: '300px', objectFit: 'cover' }}
                            />
                          </div>
                        </Carousel.Item>
                      ))
                    }
                  </Carousel>
                </div>

              </Row>
              <div className='text-center mt-4'>
                <Link to="/gallery">
                  <button className={`btn text-white rounded-pill px-4 shadow fw-semibold ${inViewGallery ? 'animate__animated animate__bounce animate__delay-1s' : ''}`} style={{ backgroundColor: '#9B663F' }}>View Gallery</button>
                </Link>
              </div>
            </div>
          </Col>

        </Row>
      </div>

      {/* Quick Order Section */}
      <section className='py-5' style={{ backgroundColor: '#fef8f4' }} ref={quickOrderRef}>
        <Container>
          <h3 className='text-center fw-bold mb-5' style={{ color: '#003049' }}>Quick Order</h3>

          <Row className='text-center align-items-center justify-content-center'>

            {/* step 1 */}
            <Col md={3} xs={12} className={`mb-4 ${inViewQuickOrder ? 'animate__animated animate__fadeInLeft' : ''}`} style={{ animationDelay: inViewQuickOrder ? '0.2s' : '0s', animationFillMode: 'both' }}>
              <div className="mb-3">
                <div className="mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: '200px', height: '200px', backgroundColor: '#b5d8d6' }}>
                  <img src='/images/icons/cart.png' alt="Place an Order" style={{ width: '100%', maxWidth: '200px' }} />
                </div>
              </div>
              <h5 className='fw-semibold'> PLACE AN ORDER</h5>
              <p className='text-muted px-2'>
                Reach out to us so we can figure out your needs and help you come up with the right products within your budget.
              </p>

            </Col>
            {/* arrow */}
            <Col md='auto' className={`d-md-block d-none text-center ${inViewQuickOrder ? 'animate__animated animate__fadeInLeft' : ''}`} style={{ animationDelay: inViewQuickOrder ? '0.4s' : '0s', animationFillMode: 'both' }}>
              <img src="/images/icons/right-arrow.png" alt="arrow" style={{ width: '80px', height: '80px', maxWidth: '100%' }} />
            </Col>
            <Col xs={12} className={`d-md-none d-block pb-4 text-center ${inViewQuickOrder ? 'animate__animated animate__fadeInDown' : ''}`} style={{ animationDelay: inViewQuickOrder ? '0.4s' : '0s', animationFillMode: 'both' }}>
              <img src="/images/icons/arrow-down.png" alt="arrow" style={{ width: '80px', height: '80px', maxWidth: '100%' }} />
            </Col>

            {/* step 2 */}
            <Col md={3} xs={12} className={`mb-4 ${inViewQuickOrder ? 'animate__animated animate__fadeInLeft' : ''}`} style={{ animationDelay: inViewQuickOrder ? '0.6s' : '0s', animationFillMode: 'both' }}>
              <div className="mb-3">
                <div className="mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: '200px', height: '200px', backgroundColor: '#b5d8d6' }}>
                  <img src='/images/icons/truck.png' alt="Place shipped to you" style={{ width: '100%', maxWidth: '200px' }} />
                </div>
              </div>
              <h5 className='fw-semibold'> SHIPPED TO YOU</h5>
              <p className='text-muted px-2'>
                Receive your order with confidence that it reflects the quality of your brand. Nothing leaves our shop that we wouldn’t be proud of.
              </p>

            </Col>
            {/* arrow */}
            <Col md='auto' className={`d-md-block d-none text-center ${inViewQuickOrder ? 'animate__animated animate__fadeInLeft' : ''}`} style={{ animationDelay: inViewQuickOrder ? '0.8s' : '0s', animationFillMode: 'both' }}>
              <img src="/images/icons/right-arrow.png" alt="arrow" style={{ width: '80px', height: '80px', maxWidth: '100%' }} />
            </Col>
            <Col xs={12} className={`d-md-none d-block pb-4 text-center ${inViewQuickOrder ? 'animate__animated animate__fadeInDown' : ''}`} style={{ animationDelay: inViewQuickOrder ? '0.8s' : '0s', animationFillMode: 'both' }}>
              <img src="/images/icons/arrow-down.png" alt="arrow" style={{ width: '80px', height: '80px', maxWidth: '100%' }} />
            </Col>

            {/* step 3 */}
            <Col md={3} xs={12} className={`mb-4 ${inViewQuickOrder ? 'animate__animated animate__fadeInLeft' : ''}`} style={{ animationDelay: inViewQuickOrder ? '1s' : '0s', animationFillMode: 'both' }}>
              <div className="mb-3">
                <div className="mx-auto d-flex align-items-center justify-content-center rounded-circle" style={{ width: '200px', height: '200px', backgroundColor: '#b5d8d6' }}>
                  <img src='/images/icons/review.png' alt="make an impression" style={{ width: '100%', maxWidth: '200px' }} />
                </div>
              </div>
              <h5 className='fw-semibold'> MAKE AN IMPRESSION</h5>
              <p className='text-muted px-2'>
                Start wearing or handing out your new gear and increase the reach of your brand!
              </p>

            </Col>

          </Row>

        </Container>
      </section>

      {/* blog posts */}
      <section className='py-5' style={{ backgroundColor: '#F7FDF5' }} ref={blogRef}>
        <Container>
          <h3 className='text-center fw-bold mb-5' style={{ color: '#003049' }}>Latest Blog Posts</h3>
          <Row className=' flex-column-reverse flex-md-row g-4 justify-content-center align-items-center'>
            <Col xs={10} md={4} className={`${inViewBlog ? 'animate__animated animate__fadeInRight' : ''}`} style={{ animationDelay: inViewBlog ? '1s' : '0s', animationFillMode: 'both' }}>
              <Card className=" shadow" style={{ backgroundColor: '#eaeaea' }}>
                <Card.Img variant='top' src='/images/threads.png' className=' pt-3 px-3' />
                <Card.Body>
                  <Card.Title className='fw-semibold' style={{ color: '#003049' }}>Blog title</Card.Title>
                  <Card.Text className='' style={{ color: '#003049' }}>12 January 2025</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={4} className={`${inViewBlog ? 'animate__animated animate__fadeInRight' : ''}`} style={{ animationDelay: inViewBlog ? '0.5s' : '0s', animationFillMode: 'both' }}>
              <Card className=" shadow" style={{ backgroundColor: '#eaeaea' }}>
                <Card.Img variant='top' src='/images/threads.png' className=' pt-3 px-3' />
                <Card.Body>
                  <Card.Title className='fw-semibold' style={{ color: '#003049' }}>Blog title</Card.Title>
                  <Card.Text className='' style={{ color: '#003049' }}>12 January 2025</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={4} className={`${inViewBlog ? 'animate__animated animate__fadeInRight' : ''}`} style={{ animationDelay: inViewBlog ? '0.2s' : '0s', animationFillMode: 'both' }}>
              <Card className=" shadow" style={{ backgroundColor: '#eaeaea' }}>
                <Card.Img variant='top' src='/images/threads.png' className=' pt-3 px-3' />
                <Card.Body>
                  <Card.Title className='fw-semibold' style={{ color: '#003049' }}>Blog title</Card.Title>
                  <Card.Text className='' style={{ color: '#003049' }}>12 January 2025</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className='text-center mt-4 '>
            <Link to="/blog">
              <button className={`btn text-white rounded-pill px-4 shadow fw-semibold ${inViewBlog ? 'animate__animated animate__bounce animate__delay-1s' : ''}`} style={{ backgroundColor: '#416668' }}>
                See More
              </button>
            </Link>
          </div>
        </Container>
      </section>

      {/* testimonials */}
      <section className='py-5' style={{ backgroundColor: '#EEFBFE' }} ref={testimonialsRef}>
        <Container>
          <h3 className='text-center fw-bold mb-5' style={{ color: '#003049' }}>Happy Customers</h3>
          <Row className='g-4 justify-content-center align-items-center'>
            <Col xs={10} md={4} className={`${inViewTestimonials ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: inViewTestimonials ? '0.2s' : '0s', animationFillMode: 'both' }}>
              <Card className="shadow" style={{ backgroundColor: '#d9f0f4' }}>
                <Card.Body>
                  <p>"Professional, timely, and beautifully detailed. I had logos stitched on uniforms for my team, and they turned out perfect."</p>
                  <p> — Rameez T., Business Owner</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={4} className={`${inViewTestimonials ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: inViewTestimonials ? '0.5s' : '0s', animationFillMode: 'both' }}>
              <Card className="shadow" style={{ backgroundColor: '#d9f0f4' }}>
                <Card.Body>
                  <p>"Professional, timely, and beautifully detailed. I had logos stitched on uniforms for my team, and they turned out perfect."</p>
                  <p> — Rameez T., Business Owner</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={10} md={4} className={`${inViewTestimonials ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: inViewTestimonials ? '1s' : '0s', animationFillMode: 'both' }}>
              <Card className="shadow" style={{ backgroundColor: '#d9f0f4' }}>
                <Card.Body>
                  <p>"Professional, timely, and beautifully detailed. I had logos stitched on uniforms for my team, and they turned out perfect."</p>
                  <p> — Rameez T., Business Owner</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Chat/>

      <ScrollUp />

      <Footer />

    </>
  )
}

export default Home