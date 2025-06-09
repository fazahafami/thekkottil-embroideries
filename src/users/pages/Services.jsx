import Header from '../components/Header'
import Footer from '../../components/Footer'
import { useInView } from 'react-intersection-observer'
import Chat from '../components/Chat'
import ScrollUp from '../../components/ScrollUp'

function Services() {
     const [heroRef, inViewHero] = useInView({ triggerOnce: true, threshold: 0.5 })
    return (
        <div>
            <Header/>
            
            {/* hero section */}
            <section className='pt-20 hero-section position-relative d-flex align-items-center'
            style={{
                backgroundImage:'url(/images/hero/servicehero.jpeg)',
                backgroundSize:'cover',
                backgroundPosition: 'center',
                height:'80vh',
                width:'100%',
                backgroundRepeat:'no-repeat'
            }} ref={heroRef}>
                <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>

                <div className={`container position-relative z-1 p-5 text-white text-center mt-4 ${inViewHero ? `animate__animated animate__fadeInLeft` : ''} `}>
          <h1 className='hero-title fw-bold lh-base mt-4' >Our Services</h1>
          <p className='fs-5'>Tailored Designs. Intricate Craftsmanship. Trusted Quality</p>
         
        </div>
            </section>

            <Chat/>
            <ScrollUp/>
            <Footer/>
        </div>
    )
}

export default Services