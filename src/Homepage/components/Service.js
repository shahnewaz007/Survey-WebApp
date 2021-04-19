import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import { Card } from "react-bootstrap";
import clientService from "../../Shared/img/client Service.png";
import SurveyerService from "../../Shared/img/client Service2.png";

import PatientRoutineIcon from "../../Shared/img/Patient-Routine.jpg";
import NotificationIcon from "../../Shared/img/Real-Time-Notification.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Service.css";

class Service extends Component {
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
          Our Services
        </p>

        <div className="row">

          <Col sm={6}>
            <img
              className="mx-auto d-block serviceImg"
              src={clientService}
              alt="client service img"
            />  
          </Col>


          <Col sm={6} data-aos="fade-left" className = "mx-auto d-block pl-4">
            <h2  className="serviceText">Make Survey for your company</h2>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, sapien sit amet maximus ultricies, ligula augue hendrerit ante, quis eleifend felis felis blandit dui. Suspendisse ut semper lectus, sed viverra ipsum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, sapien sit amet maximus ultricies, ligula augue hendrerit ante, quis eleifend felis felis blandit dui. Suspendisse ut semper lectus, sed viverra ipsum.</p>
          </Col>
        </div>

        <br/>
        <br/>
        <br/>


        <div className="row">

          


          <Col sm={6} data-aos="fade-right" className = "mx-auto d-block pl-4">
              <h2 className="serviceText">Make Money by Completing Surveys</h2>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, sapien sit amet maximus ultricies, ligula augue hendrerit ante, quis eleifend felis felis blandit dui. Suspendisse ut semper lectus, sed viverra ipsum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, sapien sit amet maximus ultricies, ligula augue hendrerit ante, quis eleifend felis felis blandit dui. Suspendisse ut semper lectus, sed viverra ipsum.</p>
          </Col>
        
        


          <Col sm={6}>
              <img
                className="mx-auto d-block serviceImg"
                src={SurveyerService}
                alt="client service img"
              />  
            </Col>

        </div>



      </div>
    );
  }
}

export default Service;
