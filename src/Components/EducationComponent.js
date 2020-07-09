import React, { Component, useState } from 'react';
import '../App.css';
import '../css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class Education extends Component {
  
    constructor(props)
    {
        super(props);
    }  
    
    render()
    {
    const education = this.props.education.map((degree) => {
        return (
            <div key={degree.id} >
                <li>
                    <h5>{degree.title}</h5>
                    <p>{degree.institution}</p>
                </li>
            </div>
            );
        });

        return (
            <div className="mt-5">
                <h1>Education</h1>
              <ul className="mt-4 pl-1">
                  {education}
              </ul>
            </div>
        );
    }
}

export default Education;
