import { Link } from "react-router-dom"


function PagenotFound() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh', width:'100%'}} >
       
            <div  className='container'>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 text-cenetr p-4">
                        <img src="/images/404.png" alt="Page Not Found" className="img-fluid mb-3" />
                         <h1 className="h3 h1-md my-2 text-center fs-1 fw-bold">Page Not Found</h1>
                         <div className="text-center my-3"><Link to={'/'}><button className="action-btn fw-bold">BACK HOME</button></Link></div>
                    </div>
                </div>
            </div>
          

    </div>
    </>
  )
}

export default PagenotFound