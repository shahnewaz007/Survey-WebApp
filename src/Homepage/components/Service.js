import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap'
import clientService from "../../Shared/img/client Service.png";
import SurveyerService from "../../Shared/img/client Service2.png";


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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
          </Col>
        </div>

        <br/>
        <br/>
        <br/>


        <div className="row">

          


          <Col sm={6} data-aos="fade-right" className = "mx-auto d-block pl-4">
              <h2 className="serviceText">Make Money by Completing Surveys</h2>
              <br/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
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
