import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Logo from '../Shared/img/logo.png'
import reg_graphics from '../Shared/img/reg Image.png'
import RegisterBox from './RegisterBox'
import AOS from "aos";

export default class Register extends Component {
    
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
                            src={reg_graphics}
                            alt="Survey Logo"
                        />
                        
                        
                    </Col>

                    

                    
                    <Col sm={5}>
                    
                        <RegisterBox/>  

                        <br/>
                        <br/>
                    </Col>

            

                
                </Row>
            </Container>
        )
    }
}
