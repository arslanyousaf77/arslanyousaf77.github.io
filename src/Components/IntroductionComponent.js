import React, { Component, useState } from 'react';
import '../App.css';
import '../css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Introduction extends Component {
  
  constructor(props)
  {
      super(props);
  }  
  
  render()
  {
    const intro = this.props.intro.map((paragraph)=> {
        return(
          <div>
            <p>{paragraph.para}</p>
            <br/>
          </div>
          );
      });
      
      return (
          <div>
            <h1>Introduction</h1>
            {intro}
          </div>
        );
    }
  }
export default Introduction;
