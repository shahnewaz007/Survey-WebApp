
import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import {Container, Row, Col, Form} from 'react-bootstrap'
import axios from "axios";
import Navbar from "../../Shared/Components/NavigationBar"
import Footer from "../../Shared/Components/Footer"
import { Card } from "react-bootstrap";
import surveyimg from "../../Shared/img/Survey_Icon.png"
import "./NewSurveyList.css"
import { withRouter } from 'react-router-dom';
import auth from "../../Shared/Auth/auth"
import Fade from "react-reveal/Fade";

export default class NewSurveyList extends Component {
    constructor() {
        super();
    
        this.state = {
            datalist: [],
          
        };
      }

      handleClick = (id) => {

        auth.surveyid = id;
        

        let path = `completeSurvey`;
        this.props.history.push(path);
      }


      componentDidMount = async (e) => {

        try {
            const response = await axios.get(
              process.env.REACT_APP_BACKEND_URL + "api/survey/allsurveys"
            );
      
            this.setState({
                datalist : response.data.Users

              
            });
            console.log(this.state.datalist)

            

        }
        catch
        {

        }

      };





    render() {

        return (
            <div>
                  <Navbar/>
                  


                <div className="container">
                    <div className="row">

                    {this.state.datalist.map((item, index) => {
                        return (
                        <Col sm={4} className="center pt-4">
                            <Card 
                            className="serviceCard my-5 center p-3"
                            onClick={() => this.handleClick(index)}>
                                <img
                                    src={surveyimg}
                                    alt="AddPatientIcon"
                                    className="surveyimg center"
                                />
                                <br/>

                                <h4 className="center">{item.surveyTitle}</h4>
                                <br/>
                                <div class="overlay">
                                    <div class="text center">
                                    {item.surveyDescription}
                                    </div>
                                </div>
                                

                            
                            </Card>
                        </Col>

                        );
                    })}

                </div>

                
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

            <Fade top cascade>
            <Footer/>

            </Fade>

            
      
            </div>
        )
    }
}
