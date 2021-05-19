import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Logo from '../Shared/img/logo.png'
import Login_graphics from '../Shared/img/Login Image.png'
import LoginBox from './LoginBox.js'
import Fade from "react-reveal/Fade";
import AOS from "aos";



import './Login.css'

export default class Login extends Component {
    render() {

        AOS.init({
            duration: 2000,
          });


        return (
            <Container fluid>
                <Row>
                    <Col sm={7}>
                        <br/>
                        <br/>

                        <a href="/">
                            <img
                                
                                className="mx-auto d-block survey-logo"
                                src={Logo}
                                alt="Survey Logo"
                            />
                        </a>

                        
                        <br/>
                        <br/>

                        
                            <img data-aos="fade-right"
                                className="mx-auto d-block Login_graphics"
                                src={Login_graphics}
                                alt="Survey Logo"
                            
                            />

                        
                        

                       
                        
                        
                    </Col>

                    

                    
                    <Col sm={5}>
                    
                    <LoginBox/>
                    </Col>

            

                
                </Row>
            </Container>
        )
    }
}
