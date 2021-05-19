import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import "./Footer.css";
import Logo from '../img/logo.png';
import ListGroup from "react-bootstrap/ListGroup";

export default class Footer extends Component {
    render() {
        return (

            <div className="container-fluid Footer">
                <div className="container">
                    <br/>
                    <br/>

                    <div className="row">
                        

                        <Col sm={4} className = "mx-auto d-block pl-4 center">
                        <br/>
                        <br/>
                            <img 
                                className="mx-auto d-block Login_graphics"
                                src={Logo}
                                alt="Survey Logo"
                            
                            />

                        <br/>

                            <p className="text-center">Mirbag, Hatirjheel, Dhaka</p>
                        </Col>

                        <Col sm={4} className = "mx-auto d-block pl-4">
                            <ListGroup.Item className="listgroup-style">
                                <a
                                className="font-weight-normal text-dark"
                                href="/patientroutine"
                                >
                                        Home
                                </a>
                            </ListGroup.Item>

                            <ListGroup.Item className="listgroup-style">
                                <a
                                className="font-weight-normal text-dark"
                                href="/patientroutine"
                                >
                                    Contact Us
                                </a>
                            </ListGroup.Item>

                            <ListGroup.Item className="listgroup-style">
                                <a
                                className="font-weight-normal text-dark"
                                href="/patientroutine"
                                >
                                    About Us
                                </a>
                            </ListGroup.Item>

                            <ListGroup.Item className="listgroup-style">
                                <a
                                className="font-weight-normal text-dark"
                                href="/patientroutine"
                                >
                                    Process
                                </a>
                            </ListGroup.Item>


                        </Col>

                        <Col sm={4} className = "mx-auto d-block pl-4">
                            <ListGroup>
                                <ListGroup.Item className="listgroup-style">
                                    <a
                                    className="font-weight-normal text-dark"
                                    href="/patientroutine"
                                    >
                                        Privacy
                                </a>
                                </ListGroup.Item>

                                <ListGroup.Item className="listgroup-style">
                                    <a
                                    className="font-weight-normal text-dark"
                                    href="/patientroutine"
                                    >
                                        Accessibility
                                    </a>
                                </ListGroup.Item>

                                <ListGroup.Item className="listgroup-style">
                                    <a
                                    className="font-weight-normal text-dark"
                                    href="/patientroutine"
                                    >
                                        Copyright
                                    </a>
                                </ListGroup.Item>

                                <ListGroup.Item className="listgroup-style">
                                    <a
                                    className="font-weight-normal text-dark"
                                    href="/patientroutine"
                                    >
                                        Terms of use
                                    </a>
                                </ListGroup.Item>

                            </ListGroup>

                        </Col>

                        



                    </div>
                    <br/>
                    <br/>
                    <br/>



                    <div className="row center">
                        <p className="text-center">Copyright ©2021 Survey Money</p>

                    </div>

                    

                    <br/>
                   

                </div>
                
            </div>
            
        )
    }
}
