import React from 'react'
import sonaliResume from '../images/Sonali Nayak Resume New.png'

const Resume = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center mh-100 mb-5">
        
        <img className='align-self-start my-5' src={sonaliResume} style={{height:"100%",width:"55%"}} />

    </div>
  )
}

export default Resume