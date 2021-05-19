import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap'
import DownloadButton from "../../Shared/img/Download.png";
import AppPhoto from "../../Shared/img/APP.png";
import "./AboutApp.css";
import AOS from "aos";

const AboutApp = () => {


    //AOS for scrolling animation design.

      AOS.init({
        duration: 2000,
      });
    
  
  return (
    <div className="container-fluid" style={{ backgroundColor: "#FBF8FF" }}>

      <div className = 'container'>
        <div className="row">

          <Col data-aos="fade-up" sm={6}>
            <img
              className="mx-auto d-block appImage"
              src={AppPhoto}
              alt="client service img"
            />  
          </Col>


          <Col sm={6} className = "my-auto d-block pl-4 mx-auto">
            <h2  className="serviceText">Download Our Android App</h2>
            <br/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>


            <div className="center">
            <Button className="mx-auto" variant="outline-secondary">Download</Button>
            </div>
            
          </Col>
        </div>
      </div>
      
    </div>

  );
};

export default AboutApp;
