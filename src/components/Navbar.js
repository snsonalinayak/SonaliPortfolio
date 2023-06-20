import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div>
      
        <nav className="navbar  navbar-expand-lg" style={{backgroundColor:"#2b1555"}}>
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/"><strong>Sonali Nayak</strong></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/"><i className="fa-solid fa-house p-1"></i>Home </Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link text-light" to="/projects"><i className="fa-solid fa-user p-1"></i>About</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link text-light" to="/projects"><i className="fa-solid fa-code p-1"></i>Projects</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-light" to="/resume"><i className="fa-solid fa-file p-1"></i>Resume</Link>
        </li>
        
      </ul>
      <span style={{cursor:"pointer" }}>
      <Link className='text-light' to="https://www.linkedin.com/in/sn-sonali-nayak/" target='_blank'><i className="fa-brands fa-linkedin fa-xl mx-2"></i></Link>
      <Link className='text-light' to="https://github.com/snsonalinayak" target='_blank'><i className="fa-brands fa-github fa-xl mx-2"></i></Link>
      <Link className='text-light' to="https://www.hackerrank.com/snsonalinayak?hr_r=1" target='_blank'><i className="fa-brands fa-hackerrank fa-xl mx-2"></i></Link>
      </span>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar


