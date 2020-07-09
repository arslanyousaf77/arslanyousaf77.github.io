import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './Components/IntroductionComponent';
import Education from './Components/EducationComponent';
import Skills from './Components/SkillsComponent';
import Projects from './Components/ProjectsComponent';
import Contact from './Components/ContactComponent';
import { INTRODUCTION } from './assets/data/introduction';
import { EDUCATION } from './assets/data/education';
import { SKILLS } from './assets/data/skills';
import { PROJECTS } from './assets/data/projects';
import { CONTACT } from './assets/data/contact';
import arslan from './assets/images/arslan.jpg';


class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      intro: INTRODUCTION,
      education: EDUCATION,
      skills: SKILLS,
      projects: PROJECTS,
      contact: CONTACT
    };
  }
  
  render() {
    return (
      <div>
          
        <div className="container">
        
          <div className="row mt-5">
          
            <div className="col-4">
              <div>
                <img width="80%" height="80%"  src={arslan} alt="arslan pic"className="rounded" />
              </div>
            </div>

            <div className="col-8 " >

              <div id="intro">
                <Introduction intro = {this.state.intro}/>
              </div>        
              
              <div id="education">
                <Education education = {this.state.education}/>
              </div>

              <div id="skills">
                <Skills skills = {this.state.skills}/>
              </div>       

              <div id="projects">
                <Projects projects = {this.state.projects}/>
              </div>       

              <div id="contact">
                <Contact contact = {this.state.contact}/>
              </div>       
            </div>
          </div>
        </div>
        <hr/><br/>
      </div>
      
    );
  }
}

export default App;
