import Header from '../components/Header'
import Footer from '../../components/Footer'
import { useInView } from 'react-intersection-observer'
import Chat from '../components/Chat'
import ScrollUp from '../../components/ScrollUp'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Services() {
    const [heroRef, inViewHero] = useInView({ triggerOnce: true, threshold: 0.5 })
    const [serviceref, inViewService] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [featuresref, inViewFeatures] = useInView({ triggerOnce: true, threshold: 0.1 });
    const services = [
        {
            title: 'Custom Logo Embroidery',
            description: 'Perfect for schools, companies & events',
            img: '/images/services/custlogo.png'
        },
        {
            title: 'Sari Embroidery',
            description: 'Graceful and intricate designs tailored for traditional elegance',
            img: '/images/services/saree.png'
        },
        {
            title: 'Churidar & Lacha Embroidery',
            description: 'Detailed embellishments for necklines, sleeves, and borders.',
            img: '/images/services/salwar.png'
        },
        {
            title: 'Kurta Embroidery',
            description: 'Refined motifs and patterns that enhance everyday and festive wear.',
            img: '/images/services/kurta.png'
        },
        {
            title: 'Shirt & T-Shirt Embroidery',
            description: 'Personalized or branded designs stitched with style and durability.',
            img: '/images/services/shirt.png'
        },
        {
            title: 'Patches',
            description: 'Custom embroidered patches for logos, names, or creative designs.',
            img: '/images/services/patches.png'
        },
        {
            title: 'Scallop Work',
            description: 'Delicate edge embroidery for a polished, decorative finish.',
            img: '/images/services/scallop.png'
        }
    ];

    const features = [
    { icon: '/images/icons/handmade.png', title: 'Handcrafted Quality' },
    { icon: '/images/icons/clock.png', title: 'On-Time Delivery' },
    { icon: '/images/icons/artisan.png', title: 'Skilled Artisans' },
    { icon: '/images/icons/order.png', title: 'Bulk Order Capability' },
    { icon: '/images/icons/personalised.png', title: 'Personalized Design Consultation' }
  ];
    return (
        <div>
            <Header />

            {/* hero section */}
            <section className='pt-20 hero-section position-relative d-flex align-items-center'
                style={{
                    backgroundImage: 'url(/images/hero/servicehero.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '80vh',
                    width: '100%',
                    backgroundRepeat: 'no-repeat'
                }} ref={heroRef}>
                <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

                <div className={`container position-relative z-1 p-5 text-white text-center mt-4 ${inViewHero ? `animate__animated animate__fadeInLeft` : ''} `}>
                    <h1 className='hero-title fw-bold lh-base mt-4' >Our Services</h1>
                    <p className='fs-5'>Tailored Designs. Intricate Craftsmanship. Trusted Quality</p>

                </div>
            </section>

            {/* serviceCategories */}
            <section className='py-5' style={{ backgroundColor: '#E5DECD' }}>
                <Container>
                    <h3 className='fw-bold text-center mb-4' style={{ color: '#003049' }}>SERVICE CATEGORIES</h3>

                    <Row className='justify-content-center py-5'  ref={serviceref}>

                        {services.map((services, index) => (
                            <Col key={index} xs={10} sm={5} md={3} 
                            className={`mb-4 d-flex justify-content-center ${inViewService ? 'animate__animated animate__fadeInUp' : ''}`}
                             style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
                                <Card
                                    style={{ width: '100%', maxWidth: '280px' }}
                                    className='service-card text-center p-3 border-0 '>
                                    <Card.Img variant="top" src={services.img} className='p-3' style={{ height: '150px', objectFit: 'contain' }} />
                                    <Card.Body>
                                        <Card.Title className='fw-bold' style={{ color: '#003049' }}>{services.title}</Card.Title>
                                        <Card.Text style={{ color: '#444' }}>{services.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                </Container>
            </section>


            {/* why choose us */}
            <section className='py-5'style={{ backgroundColor: '#f6efdf' }}>
                <Container>
                    <h3 className='fw-bold text-center mb-4' style={{ color: '#003049' }}>WHY CHOOSE US</h3>

                     <Row className='justify-content-center py-4'  ref={featuresref}>

                        {features.map((item, index) => (
                            <Col key={index} xs={5} sm={5} md={2} 
                            className={`mb-4 d-flex justify-content-center ${inViewFeatures ? 'animate__animated animate__fadeInUp' : ''}`}
                             style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}>
                                <Card
                                    style={{ width: '100%', maxWidth: '280px', backgroundColor: '#f6efdf'  }}
                                    className='service-card text-center  border-0 '>
                                    <Card.Img variant="top" src={item.icon} className='' style={{ height: '150px', objectFit: 'contain' }} />
                                    <Card.Body>
                                        <Card.Text className='' style={{ color: '#003049' }}>{item.title}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </Row>

                </Container>
            </section>

            <Chat />
            <ScrollUp />
            <Footer />
        </div>
    )
}

export default Services