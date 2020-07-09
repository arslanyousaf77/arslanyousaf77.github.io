import React, { Component, useState } from 'react';
import '../App.css';
import '../css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/logo/arslan-logo.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap';


const NavigationBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <NavbarBrand href="/" ><img src={logo} alt="logo" className="logo" /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto nav-items" navbar>
              <NavItem className="item-distance">
                <NavLink href="#intro">Introduction</NavLink>
              </NavItem>
              <NavItem className="item-distance">
                <NavLink href="#education">Education</NavLink>
              </NavItem>
              <NavItem className="item-distance">
                <NavLink href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem className="item-distance">
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem className="item-distance">
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>          
        </Navbar>
      </div>
    );
  }

  
export default NavigationBar;
