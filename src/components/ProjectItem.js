import React from 'react'
import Lottie from "lottie-react"
import { Link } from 'react-router-dom'


export const ProjectItem = (props) => {
    // const {title, desc,link,image}=props
    
    return (
        <div className='container'>

            <div class="card mb-3" style={{maxWidth: "540px", backgroundColor:"rgba(2,1,9,0.4)", color:"white"}}>
                <div class="row g-0">
                    <div class="col-md-4">
                    <Lottie animationData={props.image} loop={true} style={{ alignSelf: "center", }} />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.desc}</p>
                            <p class="card-text"><small class="text-body-light">{props.skills}</small></p>
                        </div>
                    </div>
                </div>
                <div class="card-body " style={{alignSelf:"flex-end"}}>
                    {
                        props.link?
                    <Link to={props.link} target="_blank" class="card-link text-light">{props.title}</Link>:null
                    }
                    <Link to={props.githubLink} target="_blank" class="card-link text-light">Github/{props.title}</Link>
                </div>
            </div>



        </div>
    )
}
