import React from 'react'
import Lottie from "lottie-react"
import { Link } from 'react-router-dom'


export const ProjectItem = (props) => {
    // const {title, desc,link,image}=props
    
    return (
        <div className='container'>

            <div className="card mb-3" style={{maxWidth: "540px", backgroundColor:"rgba(2,1,9,0.4)", color:"white"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <Lottie animationData={props.image} loop={true} style={{ alignSelf: "center", }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.desc}</p>
                            <p className="card-text"><small className="text-body-light">{props.skills}</small></p>
                        </div>
                    </div>
                </div>
                <div className="card-body " style={{alignSelf:"flex-end"}}>
                    {
                        props.link?
                    <Link to={props.link} target="_blank" className="card-link text-light ">{props.title}</Link>:null
                    }
                    <Link to={props.githubLink} target="_blank" className="card-link text-light">Github/{props.title}</Link>
                </div>
            </div>



        </div>
    )
}
