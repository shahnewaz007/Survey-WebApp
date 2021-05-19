import React, { Component } from 'react'
import auth from "../../Shared/Auth/auth"
import axios from "axios";
import Navbar from "../../Shared/Components/NavigationBar"
import Footer from "../../Shared/Components/Footer"
import { MDBInput } from "mdbreact";

export default class completeSurvey extends Component {
    constructor() {
        super();
    
        this.state = {
            datalist: [],
            quesList:[]
          
        };
      }

      sendForm = async (e) => {

      };



      componentDidMount = async (e) => {

        try {
            const response = await axios.get(
              process.env.REACT_APP_BACKEND_URL + "api/survey/allsurveys"
            );
      
            this.setState({
                datalist : response.data.Users[auth.surveyid],
                quesList : response.data.Users[auth.surveyid].questionList
 
              
            });
            console.log(this.state.quesList)

            

        }
        catch
        {

        }

      };



    render() {
        return (
            <div>
                <Navbar/>


                <div className="center">


                    <form className=" main_box bg-white shadow p-5" onSubmit={this.sendForm}>

                        <h1 className="center pb-5">{this.state.datalist.surveyTitle}</h1>

                        <br/>



                        {this.state.quesList.map((item, index) => {
                            return (        
                                <div>
                                    <h6>{item.question}</h6>

                                    <MDBInput

                                        placeholder="df" 
                                        type="text"
                                        name="title"
                                        id="name"
                                        
                                        required
                                    />
                                </div>

                            );
                        })}


                        <div className = "center pt-4 pb-4">
                            <button type="submit" className="btn btn-dark btn-rounded">Submit</button>
                        </div>
                        
                    </form>


                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


                <Footer/>

            </div>
        )
    }
}
