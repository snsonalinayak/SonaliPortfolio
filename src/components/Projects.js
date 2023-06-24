import React from 'react'
import { ProjectItem } from './ProjectItem'
import newsProject from '../images/newsProject.json';
import weatherProject from '../images/weatherProject.json';
import todoProject from '../images/todoList.json';
import textCureProject from '../images/textCureProject.json';
import noteSpaceProject from '../images/noteSpaceProject.json';


export const Projects = () => {
  return (
    
    <div className="container">
      <div className='d-flex justify-content-center align-items-center text-light mb-5' style={{fontSize:45}}><i className="fa-solid fa-code p-3"></i>Projects</div>
      <div className="row align-items-center mx-5">

      <div className="col-lg-6">
      <ProjectItem 
      title="NewsHive"
      image={newsProject}
      desc="This project is powered by ReactJS and Bootstrap, utilizes JavaScript to fetch data from a news API, delivering an immersive and up-to-date news browsing experience."
      githubLink="https://github.com/snsonalinayak/NewsHive"
      skills="ReactJS | API | Javascript | Bootstrap"
      />
      </div>

      <div className="col-lg-6">
      <ProjectItem
      title="NoteSpace"
      image={todoProject}
      desc="This is a Full Stack MERN project secure and private online space for personalized note-taking, accessible anytime, anywhere."
      link="link"
      githubLink="https://github.com/snsonalinayak/NoteSpace"
      skills="ReactJS | NodeJS | MongoDB | ExpressJS | Javascript | Bootstrap"


      />
      </div>

      
      <div className="col-lg-6">
      <ProjectItem
      title="WeatherWise"
      image={weatherProject}
      desc="This project is developed with ReactJS and Bootstrap, which fetches data from a wether API, providing real-time weather forecasts for any location worldwide."
      githubLink="https://github.com/snsonalinayak/WeatherWise"
      skills="ReactJS | API | Javascript | Bootstrap"


      />
      </div>
      
      
      <div className="col-lg-6">
      <ProjectItem
      title="To-Do List"
      image={noteSpaceProject}
      desc="This website, crafted with ReactJS and Bootstrap, creates an intuitive and efficient task management tool for organizing and tracking daily activities."
      link="https://to-do-list-snsonalinayak.vercel.app/"
      githubLink="https://github.com/snsonalinayak/ToDo-List"
      skills="ReactJS | Javascript | Bootstrap"


      />
      </div>

      <div className="col-lg-6">
      <ProjectItem
      title="TextCure"
      image={textCureProject}
      desc="Text Cure is a versatile Text Analyzer built with ReactJS that offers text utilities like remove whitespaces, counting word capabilites etc."
      link="https://textcure.vercel.app/"
      githubLink="https://github.com/snsonalinayak/text.cure"
      skills="ReactJS | Javascript | Bootstrap"

      />
      </div>
      
      
      </div>
    </div>
  )
}

