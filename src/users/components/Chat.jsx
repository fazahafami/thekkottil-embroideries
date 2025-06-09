import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Chat() {
  return (
    <div>
        <button
        className='action-btn animate__animated animate__fadeInRight animate__delay-2s'
        style={{
            position:'fixed',
            bottom:'20px',
            right:'20px',
            zIndex:'1000',
            borderRadius:'50%'
        }}><FontAwesomeIcon icon={faWhatsapp} className='fs-4'/>
        </button>
            <button
        className='action-btn animate__animated animate__fadeInRight animate__delay-2s'
        style={{
            position:'fixed',
            bottom:'80px',
            right:'20px',
            zIndex:'1000',
            borderRadius:'50%'
        }}><FontAwesomeIcon icon={faComment} className='fs-4'/>
        </button>
        
    </div>
  )
}

export default Chat