import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../img/logo.png";
import NotificationIcon from "../img/Notification Icon.png";
import "./NavigationBar.css";
import Avatar from "../img/avatar.png";
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button'

export default class NavigationBar extends Component {
  
  render() {
  
    return (
      <Navbar  className= "my-nav" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="200"
            height="auto"
            className="d-inline-block align-top pl-4"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav.Link className="text-dark" href="/">
            Home
          </Nav.Link>


          <Nav.Link className="text-dark" href="/">
            Create Survey
          </Nav.Link>

          

          {window.location.pathname === "/" ? (
            <React.Fragment>
              <Nav.Item>
                <Link
                  className="nav-link text-dark"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  About
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link
                  className="nav-link text-dark"
                  to="process"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  Process
                </Link>
              </Nav.Item>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Nav.Item>
                <Nav.Link className="text-dark" href="/#about">
                  About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="text-dark" href="/#process">
                  Process
                </Nav.Link>
              </Nav.Item>
            </React.Fragment>
          )}

          
          

            

            <Nav.Link href="/login">
            <Button variant="secondary">Log In</Button>{' '}
            </Nav.Link>
            
            

            
         

      

        
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
