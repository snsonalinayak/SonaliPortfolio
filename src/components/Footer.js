import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='container mt-5 '>
        <div className="row justify-content-center ">

            <div className="col-auto ">
            
                <span  style={{color:"white"}}>
                <Link className='text-light' to="https://www.linkedin.com/in/sn-sonali-nayak/" target='_blank'><i className="fa-brands fa-linkedin fa-2xl mx-3"></i></Link>
                <Link className='text-light' to="https://github.com/snsonalinayak" target='_blank'><i className="fa-brands fa-github fa-2xl mx-3"></i></Link>    
                <Link className='text-light' to="https://www.hackerrank.com/snsonalinayak?hr_r=1" target='_blank'><i className="fa-brands fa-hackerrank fa-2xl mx-3"></i></Link>    
                    
                </span>
            </div>
        </div>

        <div className="row justify-content-center mt-3 ">
            <div className="col-auto">

            <h5 className='text-light'>Sonali Nayak</h5>
            <p className='text-light'>Copyright © 2023</p>
            <p></p>
            </div>
        </div>
    </div>
  )
}

export default Footer