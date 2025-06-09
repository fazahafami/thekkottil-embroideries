import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false)

    // check position
    const toggleVisible = () => {
        const scrolled = window.scrollY
        setIsVisible(scrolled > 300)
    }

    // scroll to top action
    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    //useeffect
    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)

    }, [])
    return (
        <button
            onClick={scrolltoTop}
            className={`action-btn animate__animated ${isVisible ? 'animate__fadeInUp' : 'd-none'}`}
            style={{
                position: 'fixed',
                bottom: '140px',
                right: '30px',
                zIndex: '1000',
                borderRadius: '50%',
            }}>
            <FontAwesomeIcon icon={faArrowUp} className='fs-5'/>
        </button>
    )
}

export default ScrollUp