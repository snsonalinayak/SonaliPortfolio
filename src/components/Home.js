import React from 'react'
import Typewriter from 'typewriter-effect';
import homepgimg from '../images/homepg.json';
import Lottie from "lottie-react"
const Home = () => {
  
  return (
    <div >
      <div className='container'  >

        <div className="row d-flex justify-content-center align-items-center">

          <div className="col-lg-4 " style={{background: "rgba(60,10,109,0.5)",borderRadius:30}}>
            <h2 className=' text-light mt-5'>Hi, I'm Sonali Nayak</h2>
            <h4  className="d-inline-flex p-1 text-light">I'm a &nbsp;
            <Typewriter
              options={{
                strings: ['Frontend Developer.','React Native Developer.' ,' SQL Developer.' ,'ReactJS Developer.' , 'BTECH Undergrad.'],
                autoStart: true,
                loop: true,
              }}/>
              </h4>
            <p className="text-light mb-5" >I'm a passionate undergraduate pursuing a BTECH degree in from Birla Institute of Technology. With expertise in ReactJS, React Native, mySQL & Java. I aim to contribute my knowledge and expertise to drive meaningful digital transformations. If you're interested in collaborating or learning more about my work, feel free to connect with me.
            </p>
          </div>
          

          <div className="col-lg-8 " >          
            <Lottie animationData={homepgimg} loop={true} />
          </div>
          
          {/* <div className="col-4">          
            <h1>gfjhdjh</h1>
          </div>
          <div className="col-8">          
            <h1>gfjhdjh</h1>
          </div> */}
        </div>

        </div>
    </div>
  )
}

export default Home