import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Logo from '../Shared/img/logo.png'
import reg_graphics from '../Shared/img/reg Image.png'
import RegisterBox from './RegisterBox'

export default class Register extends Component {
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
