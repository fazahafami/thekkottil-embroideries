import React from 'react'

function Preloader() {
  return (
    <>
     <div className='d-flex justify-content-center align-items-center' style={{height:'100vh', width:'100%' , backgroundColor:'#EBE3E1'}} >
       
            <div  className='container'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-center">
                        <img src="/images/preloader.gif" alt="Preloader" className="img-fluid mb-3" />
                         
                    </div>
                </div>
            </div>
          

    </div>
    </>
  )
}

export default Preloader