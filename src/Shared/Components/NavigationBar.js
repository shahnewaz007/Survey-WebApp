import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../img/logo.png";
import NotificationIcon from "../img/Notification Icon.png";
import "./NavigationBar.css";
import Avatar from "../img/avatar.png";
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button'
import auth from "../Auth/auth";
import { Cookies } from "react-cookie";
import { Redirect } from "react-router";
import { withRouter } from 'react-router-dom';

export default class NavigationBar extends Component {
  cookies = new Cookies();

  constructor(props) {
    super(props);

   
   
  }

  

  logoutHandler = async (e) => {
  
      this.cookies.remove("isLoggedIn", { path: "/" });
      
      this.cookies.remove("userRole", { path: "/" });

   

      window.location.reload(true);
      
    
  };
  
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


        


          {auth.userRole == "Client" ?
            <Nav.Link className="text-dark" href="/createsurvey">
             Create Survey
            </Nav.Link>
            :
            null
          }

          {auth.userRole == "Client" ?
            <Nav.Link className="text-dark" href="/">
             My Surveys
            </Nav.Link>
            :
            null
          }


          
          {auth.userRole == "User" ?
            <Nav.Link className="text-dark" href="/NewSurveyList">
             New Survey
            </Nav.Link>
            :
            null
          }


          {auth.userRole == "User" ?
            <Nav.Link className="text-dark" href="/">
             Earnings
            </Nav.Link>
            :
            null
          }

          

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

          
          

          {auth.isLoggedIn ?

            
            <Button 
            variant="secondary"
            onClick={this.logoutHandler}
            >Log Out</Button>
            

            :

            <Nav.Link href="/login">
            <Button variant="secondary">Log In</Button>{' '}
            </Nav.Link>

          }

            
            

            
         

      

        
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
