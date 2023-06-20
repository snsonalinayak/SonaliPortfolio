import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Projects } from './components/Projects';
import Resume from './components/Resume';
// import Projects from './components/Projects';
import Starparticles from './components/Starparticles';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
  return (
    <>
      <Router>
      <Starparticles />
      

      
      <div className='fixed-top'>
        <Navbar />

      </div>
      <div className="container-fluid" style={{ marginTop: '4rem' }}>
        <div className="row">
          <Routes>

            {/* <Home /> */}
            {/* <Projects/> */}
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/projects' element={<Projects/>} />
            <Route exact path='/resume' element={<Resume/>} />
          </Routes>

        </div>

        
        <div className='d-flex align-items-end'>

        <Footer />
        </div>
        
      </div>
      </Router>
    </>
  );
}

export default App;
