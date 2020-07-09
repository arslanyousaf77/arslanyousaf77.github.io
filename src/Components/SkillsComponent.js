import React, { Component, useState } from 'react';
import '../App.css';
import '../css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Skills extends Component {
  
    constructor(props)
    {
        super(props);
    }  
    
    render()
    {
    const skills = this.props.skills.map((skill) => {
        return (
            <div key={skill.id} >
                <li>
                    <h5 className="mb-3">{skill.title}</h5>
                    
                    {/* <p>{degree.institution  }</p> */}
                </li>
            </div>
            );
        });

        return (
            <div className="mt-5">
                <h1>Technical Skills</h1>
              <ul className="mt-4 pl-3">
                  {skills}
              </ul>
            </div>
        );
    }
}

export default Skills;
