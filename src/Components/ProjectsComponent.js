import React, { Component, useState } from 'react';
import '../App.css';
import '../css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Projects extends Component {
  
    constructor(props)
    {
        super(props);
    }  
    
    render()
    {
    const projects = this.props.projects.map((project) => {
        return (
            <div key={project.id} >
                <li className="mb-5">
                    <h5 ><strong>{project.title}</strong></h5>
                    <p><strong>Technology: </strong>{project.technology  }</p>
                    {/* <p><strong>Description: </strong>{project.description  }</p> */}
                </li>
            </div>
            );
        });

        return (
            <div className="mt-5">
                <h1>Projects</h1>
              <ul className="mt-4 pl-3">
                  {projects}
              </ul>
            </div>
        );
    }
}

export default Projects;
