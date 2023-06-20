import React from 'react'
import sonaliResume from '../images/Sonali Resume.png'

const Resume = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center mh-100" >
        
        <img className='align-self-start my-5' src={sonaliResume} style={{height:"50rem"}} />

    </div>
  )
}

export default Resume