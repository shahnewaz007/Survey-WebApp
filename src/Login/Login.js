import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Logo from '../Shared/img/logo.png'
import Login_graphics from '../Shared/img/Login Image.png'
import LoginBox from './LoginBox.js'



import './Login.css'

export default class Login extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={7}>
                        <br/>
                        <br/>

                        <img
                            className="mx-auto d-block survey-logo"
                            src={Logo}
                            alt="Survey Logo"
                        />
                        <br/>
                        <br/>
                        

                        <img
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
