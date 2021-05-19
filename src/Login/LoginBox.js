import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import {Container, Row, Col, Form} from 'react-bootstrap'
import axios from "axios";
import { Redirect } from "react-router";
import { Cookies } from "react-cookie";
import auth from "../Shared/Auth/auth";

export default class LoginBox extends Component {

    cookies = new Cookies();


    constructor() {
        super();
    
        this.state = {
          email: "",
          password: "",
          type : "User",
          redirect: false,
        };
      }


      sendForm = async (e) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        console.log(this.state.type);




        if(this.state.type == "User")
        {
            try {
                const response = await axios.post(
                  process.env.REACT_APP_BACKEND_URL + "api/users/login", //API Call
                  {
                    email: this.state.email,
                    password: this.state.password
                  }
                );

                alert(response.data.message);
                

                auth.isLoggedIn = true; //set login condion true
                auth.userRole = this.state.type;


                this.cookies.set("isLoggedIn", auth.isLoggedIn, {
                    //set cookie for isloggedin
                    path: "/",
                    maxAge: 31536000,
                  });


                  this.cookies.set("userRole", auth.userRole, {
                    path: "/",
                    maxAge: 31536000,
                  });

                  this.setState({ redirect: true }); //redirect condion for home page
            }
            catch
            {
               
            }
        }
        else
        {
            try {
                const response = await axios.post(
                    process.env.REACT_APP_BACKEND_URL + "api/clients/login", //API Call
                  
                  {
                    email: this.state.email,
                    password: this.state.password
                  }
                );

                alert(response.data.message);
                

                auth.isLoggedIn = true; //set login condion true
                auth.userRole = this.state.type;


                this.cookies.set("isLoggedIn", auth.isLoggedIn, {
                    //set cookie for isloggedin
                    path: "/",
                    maxAge: 31536000,
                  });


                  this.cookies.set("userRole", auth.userRole, {
                    path: "/",
                    maxAge: 31536000,
                  });

                  this.setState({ redirect: true }); //redirect condion for home page
            }
            catch
            {
               
            }
        }

      };













    render() {

        //redirect to homepage after successful login
        const { redirect } = this.state;
        //alert(redirect);
        if (redirect) {
        return <Redirect to="/" />;
        } else
        return (
            <div data-aos="fade-left" className="container" className="center">
                <div className=" main_box bg-white shadow">

                     <h2 className="center Heading">Log In</h2>

                    <form className="form-group" onSubmit={this.sendForm}>
                        <MDBInput
                            label="Email" 
                            type="email"
                            name="email"
                            value={this.state.email}
                            onInput={this.handleInput}
                            id="name"
                            onChange={(e) =>
                                this.setState({
                                email: e.target.value,
                                })
                            }
                            required
                         />



                        <MDBInput
                            label="Password"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onInput={this.handleInput}
                            id="password"
                            onChange={(e) =>
                                this.setState({
                                password: e.target.value,
                                })
                            }
                            required
                        />


                        <a href="/forgot_password" style={{ color: "#2D2E6A" }}>
                            Forgot Password
                        </a>


                        <Col sm={10} className="center pt-4">
                            <Form.Check inline
                            className="pl-5"
                                type="radio"
                                label="User"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                                onChange={(e) =>
                                    this.setState({
                                        type: "User",
                                    })
                                }
                                checked
                                
                            />

                            <Form.Check inline
                                className="pl-5"
                                type="radio"
                                label="Client"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                                onChange={(e) =>
                                    this.setState({
                                        type: "Client",
                                    })
                                }
                            />
                            
                        </Col>






                        


                        <div className = "center pt-4 pb-4">
                        <button type="submit" className="btn btn-dark btn-rounded">Login</button>
                        </div>

                        <p className="center">Don't have any account?</p>

                        <div className = "center pt-2 pb-4">
                        <a href="/register" type="button" className="btn btn-dark btn-rounded">Create Account</a>
                        </div>
                        
                    </form>
                </div>             
            </div>
        )
    }
}
