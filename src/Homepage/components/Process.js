import React, { Component } from 'react'
import "./Process.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {Container, Row, Col} from 'react-bootstrap'
import JoinIcon from "../../Shared/img/Join_Icon.png";
import SurveyIcon from "../../Shared/img/Survey_Icon.png";
import MoneyIcon from "../../Shared/img/Money_Icon.png";


import SurveyerService from "../../Shared/img/client Service2.png";

export default class Process extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
      }
    
      //AOS for scrolling animation design.
      componentDidMount() {
        AOS.init({
          duration: 2000,
        });
      }


    render() {
        return (
            <div
            id={this.props.id}
            data-aos="fade-up"
            className="container mb-5 mt-2 pt-5"
            >
                <p
                className="h1 text-center font-weight-bold mb-5"
                style={{ color: "#19184E" }}
                >
                How It Works
                </p>


                <div className="row">

                    <Col sm={4} data-aos="fade-left" className = "mx-auto d-block pl-4">
                        <img
                        className="mx-auto d-block processImg"
                        src={JoinIcon}
                        alt="Join Icon"
                        />
                        <h4 className="serviceText text-center">Join With US</h4>
                        <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Col>

                    <Col sm={4} data-aos="fade-left" className = "mx-auto d-block pl-4">
                        <img
                        className="mx-auto d-block processImg"
                        src={SurveyIcon}
                        alt="SurveyIcon img"
                        />
                        <h4 className="serviceText text-center">Complete Surveys</h4>
                        <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Col>

                    <Col sm={4} data-aos="fade-left" className = "mx-auto d-block pl-4">
                        <img
                        className="mx-auto d-block processImg"
                        src={MoneyIcon}
                        alt="MoneyIcon img"
                        />
                        <h4 className="serviceText text-center">Make Money</h4>
                        <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </Col>

                    

                 </div>
                 <br/>
                 <br/>
                 <br/>





            </div>
        )
    }
}
